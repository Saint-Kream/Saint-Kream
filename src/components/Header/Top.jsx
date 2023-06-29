import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Row from "../Flex/Row";
import { AuthContext } from "../../authContext";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase-config";

const Top = () => {
  const userInfo = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <TopContainer>
      <Row>
        <TopList>
          <TopLink to="https://kream.co.kr/notice">고객센터</TopLink>
          <TopLink to="/my">마이페이지</TopLink>
          <TopLink to="/shop">관심상품</TopLink>
          <TopLink to="/shop">알림</TopLink>
          {userInfo ? (
            <TopLink onClick={handleLogout}>로그아웃</TopLink>
          ) : (
            <TopLink to="/login">로그인</TopLink>
          )}
        </TopList>
      </Row>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  /* background-color: green; */
  line-height: 20px;
`;

const TopList = styled.div`
  display: flex;
  gap: 25px;
  margin-left: auto;
  margin-right: 10px;
`;

const TopLink = styled(Link)`
  text-decoration: none;
  color: rgba(34, 34, 34, 0.8);
  font-size: 12px;
`;

export default Top;
