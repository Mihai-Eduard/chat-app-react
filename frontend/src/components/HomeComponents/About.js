import React from "react";

const About = (props) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #F5F5DC 50%, #212539 50%)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#212539",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10rem" }}
      >
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "2px 0 0 #F5F5DC",
            color: "#212539",
          }}
        >
          About Sor
        </div>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#F5F5DC",
          }}
        >
          in and Edi
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80%",
        }}
      >
        <div
          style={{
            width: "45%",
            textAlign: "left",
            color: "#212539",
            background: "#F5F5DC",
          }}
        >
          <h2>Sorin</h2>
          <a href="https://github.com/Sorinenachioiu">
            https://github.com/Sorinenachioiu
          </a>
        </div>
        <div
          style={{
            width: "45%",
            textAlign: "left",
            color: "#F5F5DC",
            background: "#212539",
          }}
        >
          <h2>Edi</h2>
          <a href="https://github.com/Mihai-Eduard">
            https://github.com/Mihai-Eduard
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
