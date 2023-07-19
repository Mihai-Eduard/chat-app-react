import React from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/token";

const UserMainComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Sorinel Piticu</p>
      <button
        onClick={() => {
          removeToken();
          navigate("/home");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMainComponent;
