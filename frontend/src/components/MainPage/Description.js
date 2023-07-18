import React from "react";
import { Carousel } from "react-bootstrap";
import * as PropTypes from "prop-types";
import photo1 from "../../resources/MainPage/photo1.jpg";
import photo2 from "../../resources/MainPage/photo2.jpg";
import photo3 from "../../resources/MainPage/photo3.jpg";

function ExampleCarouselImage({ src, alt }) {
  return <img src={src} alt={alt} className="carousel-image" />;
}

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
const Description = () => {
  const imageStyle = {
    height: "auto",
    width: "100%",
    objectFit: "contain",
  };
  function CarouselImage({ src, alt }) {
    return <img src={src} alt={alt} style={imageStyle} />;
  }

  ExampleCarouselImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  return (
    <Carousel id="description" fade>
      <Carousel.Item>
        <CarouselImage src={photo1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={photo2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={photo3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Description;
