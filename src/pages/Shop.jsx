import React from "react";
import styled from "styled-components";

const Shop = () => {
  return (
    <Container>
      <h1 style={{ margin: "20px", fontWeight: "600" }}>SHOP</h1>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: violet; */
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export default Shop;
