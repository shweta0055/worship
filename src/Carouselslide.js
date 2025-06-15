import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import banner1 from "./images/banner-1.jpg";

import "./CarouselPage.css";

function Carouselslide() {
  return (
    <div>
      <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "60vh" }}
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Redefining CAPF & CDS Preparation with Hybrid Learning! </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "60vh" }}
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Redefining CAPF & CDS Preparation with Hybrid Learning! </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "60vh" }}
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Redefining CAPF & CDS Preparation with Hybrid Learning!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
    </div>
  );
}

export default Carouselslide;


/*
        */