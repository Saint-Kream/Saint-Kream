import React from "react";
import styled from "styled-components";
import Row from "../Flex/Row";
import Column from "../Flex/Column";
import { Link } from "react-router-dom";
import "./style.css";

const Main = () => {
  const [current, setCurrent] = React.useState("home");
  const [isSearch, setIsSearch] = React.useState(false);

  return (
    <>
      {isSearch ? (
        <ModalWrap>
          <Modal>
            <Cancel onClick={() => setIsSearch(false)}>
              <img src="images/cancel.png" style={{ width: "17px" }} />
            </Cancel>
            <SearchInput
              list="list"
              placeholder="브랜드명, 모델명, 모델번호 등"
            />
            <datalist id="list">
              <option value="크림 단독"></option>
              <option value="디젤"></option>
              <option value="스투시"></option>
              <option value="오니츠카 타이거"></option>
              <option value="우영미"></option>
              <option value="에어팟"></option>
              <option value="살로몬"></option>
            </datalist>
          </Modal>
        </ModalWrap>
      ) : (
        ""
      )}
      <MainContainer>
        <Row>
          <Link to="/">
            <LogoImg src="images/logo.png" alt="KREAM" />
          </Link>
          <GNBList>
            <GNBLink
              to="/"
              className={current === "home" ? "current" : ""}
              onClick={() => setCurrent("home")}
            >
              HOME
            </GNBLink>
            <GNBLink
              to="/style"
              className={current === "style" ? "current" : ""}
              onClick={() => setCurrent("style")}
            >
              STYLE
            </GNBLink>
            <GNBLink
              to="/shop"
              className={current === "shop" ? "current" : ""}
              onClick={() => setCurrent("shop")}
            >
              SHOP
            </GNBLink>
            <Search
              src="images/search.png"
              alt="SEARCH"
              onClick={() => setIsSearch(true)}
            />
          </GNBList>
        </Row>
      </MainContainer>
    </>
  );
};

const SearchInput = styled.input.attrs({ placeholderTextColor: "red" })`
  width: 50vw;
  height: 50px;
  border: none;
  border-bottom: 3px solid black;
  font-size: 18px;
  color: #000000;
  font-weight: 700;
  /* background-color: #bf7507; */
`;

const ModalWrap = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #ffffff;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const Modal = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  position: absolute;
  z-index: 10;
  top: 60px;
`;

const ModalImg = styled.img`
  width: 95%;
`;

const Cancel = styled.div`
  width: 17px;
  height: 17px;
  padding: 7px;
  position: absolute;
  top: -50px;
  right: -330px;
  cursor: pointer;
`;

const MainContainer = styled.div`
  /* background-color: green; */
  margin: auto 0;
`;

const LogoImg = styled.img`
  width: 115px;
  height: 19px;
`;

const GNBList = styled.div`
  display: flex;
  margin-left: auto;
  gap: 40px;
`;

const GNBLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
`;

const Search = styled.img`
  width: 23px;
  margin: 0 10px;
  cursor: pointer;
`;

export default Main;
