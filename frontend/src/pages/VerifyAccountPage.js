// import React, { useEffect } from "react";
// import { json, useNavigate } from "react-router-dom";
// import LoadingLayout from "../components/LoadingLayout";
// import { getToken } from "../utils/token";
//
// const VerifyAccountPage = () => {
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     fetchAndVerify().then((authorized) => {
//       console.log(authorized);
//       if (authorized === "TRUE") return navigate("/user");
//       else return navigate("/home");
//     });
//   }, [navigate]);
//
//   return <LoadingLayout />;
// };
//
// export default VerifyAccountPage;
