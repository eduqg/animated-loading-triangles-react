import React from "react";
import styled from "styled-components";

import triangle from "./triangle.png";

const Container = styled.div`
  /* Optional */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #eee;
`;

const width = 50;
const height = 45;

const displacement = 25;

const translateTime = 2;

const Triangles = styled.div`
  position: relative;

  @keyframes translate1 {
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

  @keyframes translate2 {
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

  @keyframes translate3 {
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

  img {
    position: absolute;
    width: ${`${width}px`};
    height: ${`${height}px`};
  }
  img.triangle1 {
    animation: translate1 ${`${translateTime}s`} ease-in-out infinite;
  }

  img.triangle2 {
    animation: translate2 ${`${translateTime}s`} ease-in-out infinite;
  }
  img.triangle3 {
    animation: translate3 ${`${translateTime}s`} ease-in-out infinite;
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
