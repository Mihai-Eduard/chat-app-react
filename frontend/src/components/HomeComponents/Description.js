import React from "react";
import { Carousel } from "react-bootstrap";
import photo1 from "../../resources/MainPage/picture1.png";
import photo2 from "../../resources/MainPage/picture2.png";
import photo3 from "../../resources/MainPage/picture3.png";

const Description = () => {
  const imageStyle = {
    height: "auto",
    width: "100%",
    objectFit: "contain",
  };
  function CarouselImage({ src, alt }) {
    return <img src={src} alt={alt} style={imageStyle} />;
  }

  return (
    <Carousel
      fade
      style={{
        width: "50%",
        marginTop: "3rem",
        marginBottom: "3rem",
        alignSelf: "center",
      }}
      variant="dark"
    >
      <Carousel.Item>
        <CarouselImage src={photo1} alt="First slide" />
        <Carousel.Caption>
          <h3 style={{ color: "#212539" }}>Real-time instant messages</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={photo2} alt="Second slide" />
        <Carousel.Caption>
          <h3 style={{ color: "#F5F5DC" }}>Configurable account</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={photo3} alt="Third slide" />
        <Carousel.Caption>
          <h3 style={{ color: "#F5F5DC" }}>Manage your connections</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Description;
