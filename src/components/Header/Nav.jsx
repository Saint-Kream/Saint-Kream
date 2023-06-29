import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Row from "../Flex/Row";

const Nav = () => {
  return (
    <NavContainer>
      <Row>
        <NavList>
          <NavLink>산산기어</NavLink>
        </NavList>
      </Row>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: purple;
  height: 44px;
`;

const NavList = styled.div`
  display: flex;
  gap: 25px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(34, 34, 34, 0.8);
  font-size: 12px;
`;

export default Nav;
