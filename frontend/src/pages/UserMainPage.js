import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import LoadingLayout from "../components/LoadingLayout";
import { getToken } from "../utils/token";
import UserMainComponent from "../components/UserMainComponent";

const UserMainPage = () => {
  const [element, setElement] = useState(<LoadingLayout />);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAndVerify().then(([authorized, conversations]) => {
      if (authorized === "FALSE") return navigate("/home");
      else {
        console.log(conversations);
        console.log(authorized["username"]);
        setElement(
          <UserMainComponent
            username={authorized["username"]}
            conversations={conversations}
          />,
        );
      }
    });
  }, [navigate, setElement]);

  return <>{element}</>;
};

export default UserMainPage;

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

    const getConversationsResponse = await fetch(
      "http://localhost:8080/user/conversations",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );

    if (getConversationsResponse.status === 401) return ["FALSE", null];

    const username = (await verifyUserResponse.json())["username"];
    const conversations = (await getConversationsResponse.json())[
      "conversations"
    ];
    return [{ username: username }, conversations];
  } catch (error) {
    console.log(error);
    throw json(
      { message: "Could not authenticate the user!" },
      { status: 500 },
    );
  }
};
