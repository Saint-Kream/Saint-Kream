import React from "react";
import styled from "styled-components";

const Style = () => {
  return (
    <Container>
      <h1 style={{ margin: "20px", fontWeight: "600" }}>STYLE</h1>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: purple; */
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export default Style;
