import React from "react";
import styled from "styled-components";
import Row from "../Flex/Row";
import Column from "../Flex/Column";

const Corporation = () => {
  return (
    <ServiceContainer>
      <Row>
        <MenuBox>
          <MenuTitle>이용안내</MenuTitle>
          <Column gap="16px">
            <MenuList>검수기준</MenuList>
            <MenuList>이용정책</MenuList>
            <MenuList>페널티정책</MenuList>
            <MenuList>커뮤니티 가이드라인</MenuList>
          </Column>
        </MenuBox>
        <MenuBox style={{ marginLeft: "80px" }}>
          <MenuTitle>고객지원</MenuTitle>
          <Column gap="16px">
            <MenuList>공지사항</MenuList>
            <MenuList>서비스 소개</MenuList>
            <MenuList>스토어 안내</MenuList>
            <MenuList>판매자 방문접수</MenuList>
          </Column>
        </MenuBox>
        <CustomerService>
          <Row gap="4px">
            <ServiceTitle>고객센터</ServiceTitle>
            <ServiceTel>1588-7813</ServiceTel>
          </Row>
          <ServiceTime>
            운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) 점심시간 평일 13:00
            - 14:00
          </ServiceTime>
          <ServiceNotice>1:1 문의하기는 앱에서만 가능합니다.</ServiceNotice>
          <FAQBtn>
            <a
              href="https://kream.co.kr/faq"
              style={{ textDecoration: "none", color: "white" }}
            >
              자주 묻는 질문
            </a>
          </FAQBtn>
        </CustomerService>
      </Row>
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
  /* background-color: blue; */
  border-top: 1px solid #eaeaea;
  padding: 50px 40px;
  width: 100%;
`;

const MenuTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const MenuList = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: #929292;
`;

const MenuBox = styled.div`
  width: 160px;
`;

const CustomerService = styled.div`
  margin-left: auto;
`;

const ServiceTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ServiceTel = styled.a`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const ServiceTime = styled.div`
  font-size: 13px;
  max-width: 263px;
  line-height: 20px;
  color: #929292;
`;

const ServiceNotice = styled.div`
  font-size: 13px;
  padding-top: 8px;
`;

const FAQBtn = styled.button`
  margin: 17px 0 0;
  color: #ffffff;
  font-weight: 700;
  background-color: #222;
  font-size: 12px;
  width: 95px;
  height: 34px;
  border: none;
  cursor: pointer;
`;

export default Corporation;
