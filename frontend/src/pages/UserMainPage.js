import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import LoadingLayout from "../components/LoadingLayout";
import { getToken } from "../utils/token";
import UserMainComponent from "../components/UserMainComponent";

const UserMainPage = () => {
  const [element, setElement] = useState(<LoadingLayout />);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAndVerify().then((authorized) => {
      console.log(authorized);
      if (authorized === "TRUE") setElement(<UserMainComponent />);
      else return navigate("/home");
    });
  }, [navigate, setElement]);

  return <>{element}</>;
};

export default UserMainPage;

const fetchAndVerify = async () => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  await sleep(1500);

  try {
    const response = await fetch("http://localhost:8080/user/verify", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.status !== 401 ? "TRUE" : "FALSE";
  } catch (error) {
    console.log("*" + error);
    throw json(
      { message: "Could not authenticate the user!" },
      { status: 500 },
    );
  }
};
