import React from "react";
import styled from "styled-components";
import Service from "./Service";
import Corporation from "./Corporation";

const Footer = () => {
  return (
    <Layout>
      <FooterContainer>
        <Service />
        <Corporation />
      </FooterContainer>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 560px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  width: 85%;
  height: 445px;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Footer;
