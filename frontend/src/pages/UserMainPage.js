import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import LoadingLayout from "../components/LoadingLayout";
import { getToken } from "../utils/token";
import UserMainComponent from "../components/UserMainComponent";
import { useDispatch } from "react-redux";
import { currentActions } from "../store/current-slice";

const UserMainPage = () => {
  const [element, setElement] = useState(<LoadingLayout />);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAndVerify().then(([authorized, conversations]) => {
      if (authorized === "FALSE") return navigate("/home");
      else {
        console.log(conversations);
        console.log(authorized["username"]);
        dispatch(
          currentActions.setUsername({ username: authorized["username"] }),
        );
        dispatch(
          currentActions.setConversations({ conversations: conversations }),
        );
        setElement(<UserMainComponent />);
      }
    });
    const interval = setInterval(() => {
      // console.log("fetching");
      fetchTheConversations()
        .then((conversations) => {
          if (conversations === "FALSE") return navigate("/home");
          dispatch(
            currentActions.setConversations({
              conversations: conversations,
            }),
          );
        })
        .catch((error) => {
          console.log(error);
          throw json(
            { message: "Could not authenticate the user!" },
            { status: 500 },
          );
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [navigate, setElement, dispatch]);

  return <>{element}</>;
};

export default UserMainPage;

const fetchTheConversations = async () => {
  try {
    const response = await fetch("http://localhost:8080/user/conversations", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (response.status === 401) return "FALSE";
    return (await response.json())["conversations"];
  } catch (error) {
    console.log(error);
    throw json(
      { message: "Could not authenticate the user!" },
      { status: 500 },
    );
  }
};

const fetchAndVerify = async () => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  console.log("verifying...");
  await sleep(1500);

  try {
    const verifyUserResponse = await fetch(
      "http://localhost:8080/user/verify",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );

    if (verifyUserResponse.status === 401) return ["FALSE", null];

    const conversations = await fetchTheConversations();
    if (conversations === "FALSE") return ["FALSE", null];

    const username = (await verifyUserResponse.json())["username"];

    return [{ username: username }, conversations];
  } catch (error) {
    console.log(error);
    throw json(
      { message: "Could not authenticate the user!" },
      { status: 500 },
    );
  }
};
