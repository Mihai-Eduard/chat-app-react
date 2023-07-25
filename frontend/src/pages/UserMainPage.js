import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import LoadingLayout from "../components/LoadingLayout";
import { getToken } from "../utils/token";
import { useDispatch } from "react-redux";
import { currentActions } from "../store/current-slice";
import UserMainComponent from "../components/UserMainComponent";

const dispatchUserAndMessages = (dispatch, response, navigate) => {
  if (response === "SERVER ERROR")
    throw json(
      { message: "Could not authenticate the user!" },
      { status: 500 },
    );
  if (response === "NOT AUTHORIZED") return navigate("/home");

  dispatch(
    currentActions.setUser({
      user: {
        username: response["username"],
        id: response["id"],
        picture: response["picture"],
      },
    }),
  );
  dispatch(
    currentActions.setConversations({
      conversations: response["conversations"],
    }),
  );
  dispatch(
    currentActions.setFriendRequests({
      friendRequests: response["friendRequests"],
    }),
  );
};

const handleError = (error) => {
  console.log(error);
  throw json({ message: "Could not authenticate the user!" }, { status: 500 });
};

const UserMainPage = () => {
  const [element, setElement] = useState(<LoadingLayout />);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;
    fetchTheUser()
      .then((response) => {
        dispatchUserAndMessages(dispatch, response, navigate);
        setElement(<UserMainComponent />);

        interval = setInterval(() => {
          fetchTheUser()
            .then((response) => {
              dispatchUserAndMessages(dispatch, response, navigate);
            })
            .catch(handleError);
        }, 1000);
      })
      .catch(handleError);

    return () => {
      clearInterval(interval);
    };
  }, [navigate, setElement, dispatch]);

  return <>{element}</>;
};

export default UserMainPage;

const fetchTheUser = async () => {
  try {
    const response = await fetch("http://localhost:8080/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (response.status === 500) return "SERVER ERROR";
    if (response.status === 401) return "NOT AUTHORIZED";
    return (await response.json())["user"];
  } catch (error) {
    handleError(error);
  }
};
