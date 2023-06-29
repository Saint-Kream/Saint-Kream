import React, { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import styled from "styled-components";
import Column from "../components/Flex/Column";
import Row from "../components/Flex/Row";

const MyPage = () => {
  const userInfo = useContext(AuthContext);
  //   console.log(userInfo);
  return (
    <Container>
      <Column>
        <h1>마이 페이지</h1>
        <UserInfoBox>
          <Row>
            <ProfileImg>
              <Img src="images/profile.png" />
            </ProfileImg>
            <Column>
              {userInfo ? (
                <>
                  <Id>{userInfo.uid}</Id>
                  <Email>{userInfo.email}</Email>
                </>
              ) : (
                <h2>로그인후 이용해주세요.</h2>
              )}
            </Column>
          </Row>
        </UserInfoBox>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 680px;
  /* background-color: red; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfoBox = styled.div`
  width: 40vw;
  height: 200px;
  background-color: white;
  padding: 20px;
  margin: 50px 0;
  border: 2px solid #ebebeb;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
`;

const Id = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0;
`;

const Email = styled.div`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;

const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 30px;
  border-radius: 50px;
  background-color: red;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

export default MyPage;
