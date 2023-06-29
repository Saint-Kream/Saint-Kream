import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../authContext";
import { auth } from "../firebase-config";
import Column from "../components/Flex/Column";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePwd = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleSubit = (e) => {
    e.preventDefault();

    // 회원 가입일때
    createUserWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        alert("회원가입 성공");
        navigate("/");
      })
      .catch((e) => {
        alert(e);
      });
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Container>
      <LoginBox>
        <Column>
          <SignUp>회원가입</SignUp>
          <LoginForm onSubmit={handleSubit}>
            <Column>
              <InputInfo>이메일 주소*</InputInfo>
              <LoginInput
                type="email"
                name="email"
                onChange={handleEmail}
                value={email}
                placeholder="예) gwonsewon03@gmail.com"
              />
              <InputInfo>비밀번호*</InputInfo>
              <LoginInput
                type="password"
                name="pwd"
                onChange={handlePwd}
                value={pwd}
                placeholder="영문,숫자,특수문자 조합 8-16자"
              />
              <LoginBtn type="submit">회원가입</LoginBtn>
            </Column>
          </LoginForm>
        </Column>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 680px;
  /* background-color: pink; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  margin: auto 0;
  width: 400px;
  /* background-color: red; */
`;

const SignUp = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const LoginForm = styled.form``;

const InputInfo = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin: 50px 0 10px;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 38px;
  border: 0;
  /* margin: 10px 0; */
  border-bottom: 1px solid #ebebeb;
`;

const LoginBtn = styled.button`
  width: 400;
  height: 52px;
  border: none;
  border-radius: 12px;
  color: white;
  background-color: #ebebeb;
  font-size: 16px;
  font-weight: 700;
  margin: 30px 0;
  cursor: pointer;
`;

export default Join;
