import React from "react";
import styled from "styled-components";

import triangle from "./triangle380-347.png";

const Container = styled.div`
  /* Optional */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #eee;
`;

/* Image Properties */
const imageWidth = 380;
const imageHeight = 347;

const size = 0.2;
const width = imageWidth * size;
const height = imageHeight * size;

const rotationCenter = (imageHeight - 130.5) * size;

const translateTime = 2;
const rotateTime = 6;

const displacement = 20;

const Triangles = styled.div`
  position: relative;

  @keyframes translateTriangle1 {
    0% {
      top: ${`${-height}px`};
      left: ${`${-width / 2}px`};
    }
    50% {
      top: ${`${-height - displacement}px`};
      left: ${`${-width / 2}px`};
    }
    100% {
      top: ${`${-height}px`};
      left: ${`${-width / 2}px`};
    }
  }

  @keyframes translateTriangle2 {
    0% {
      top: 0;
      left: 0;
    }
    50% {
      top: 0;
      left: ${`${displacement}px`};
    }
    100% {
      top: 0;
      left: 0;
    }
  }

  @keyframes translateTriangle3 {
    0% {
      top: 0;
      left: ${`${-width}px`};
    }
    50% {
      top: 0;
      left: ${`${-width - displacement}px`};
    }
    100% {
      top: 0;
      left: ${`${-width}px`};
    }
  }

  @keyframes rotationTriangles {
    0% {
      transform: rotate(0deg);
    }
    33.33% {
      transform: rotate(120deg);
    }
    66.66% {
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  img {
    position: absolute;
    width: ${`${width}px`};
    height: ${`${height}px`};
    transform-origin: 50% ${`${rotationCenter}px`};
  }
  img.triangle1 {
    animation: rotationTriangles ${`${rotateTime}s`} infinite,
      translateTriangle1 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.triangle2 {
    animation: rotationTriangles ${`${rotateTime}s`} infinite,
      translateTriangle2 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.triangle3 {
    animation: rotationTriangles ${`${rotateTime}s`} infinite,
      translateTriangle3 ${`${translateTime}s`} ease-in-out infinite;
  }
`;

export default function App() {
  return (
    <Container>
      <Triangles>
        <img src={triangle} alt="triangle1" className="triangle1" />
        <img src={triangle} alt="triangle2" className="triangle2" />
        <img src={triangle} alt="triangle3" className="triangle3" />
      </Triangles>
    </Container>
  );
}
