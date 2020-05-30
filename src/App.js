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

const Triangles = styled.div`
  position: relative;
  text-align: center;
  border: 1px solid red;
  img {
    position: absolute;
    width: ${`${width}px`};
    height: ${`${height}px`};
  }
  img.triangle1 {
    top: ${`${-height}px`};
    left: ${`${-width / 2}px`};
  }
  img.triangle2 {
    top: 0;
    left: 0;
  }
  img.triangle3 {
    top: 0;
    left: ${`${-width}px`};
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
