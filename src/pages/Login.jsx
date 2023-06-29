import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import { auth } from "../firebase-config";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Row from "../components/Flex/Row";
import Column from "../components/Flex/Column";

const Login = () => {
  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);

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
    signInWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        alert("로그인 성공");
        navigate("/");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <Container>
      <LoginBox>
        <Column>
          <LoginImg src="images/login.png" />
          <LoginForm onSubmit={handleSubit}>
            <Column>
              <InputInfo>이메일 주소</InputInfo>
              <LoginInput
                type="email"
                name="email"
                onChange={handleEmail}
                value={email}
                placeholder="예) gwonsewon03@gmail.com"
              />
              <InputInfo>비밀번호</InputInfo>
              <LoginInput
                type="password"
                name="pwd"
                onChange={handlePwd}
                value={pwd}
              />
              <LoginBtn type="submit">로그인</LoginBtn>
            </Column>
          </LoginForm>
          <SignUp to="/join">이메일 가입</SignUp>
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

const LoginImg = styled.img`
  width: 250px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const LoginForm = styled.form``;

const InputInfo = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin: 10px 0;
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

const SignUp = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: black;
  margin: 0 auto;
`;

export default Login;
