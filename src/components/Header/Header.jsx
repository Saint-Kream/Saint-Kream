import React, { useContext } from "react";
import styled from "styled-components";
import Main from "./Main";
import Nav from "./Nav";
import Top from "./Top";
import { AuthContext } from "../../authContext";

const Header = () => {
  const userInfo = useContext(AuthContext);
  return (
    <Layout>
      <HeaderContainer>
        <Top />
        <Main />
        {/* <IsLoginPage /> */}
      </HeaderContainer>
    </Layout>
  );
};

const IsLoginPage = styled.div`
  height: 44px;
  background-color: white;
`;

const Layout = styled.div`
  width: 100%;
  height: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  width: 80%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Header;
