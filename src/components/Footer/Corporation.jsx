import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Column from "../Flex/Column";
import Row from "../Flex/Row";

const Corporation = () => {
  const [isModal, setIsModal] = React.useState(false);
  return (
    <>
      {isModal ? (
        <ModalWrap>
          <Modal>
            <Cancel onClick={() => setIsModal(false)}>
              <img src="images/cancel.png" style={{ width: "17px" }} />
            </Cancel>
            <ModalImg src="images/check.webp" />
          </Modal>
        </ModalWrap>
      ) : (
        ""
      )}
      <CorporationContainer>
        <Column>
          <Row>
            <TermList>
              <TermLink>회사소개</TermLink>
              <TermLink>인재채용</TermLink>
              <TermLink>제휴제안</TermLink>
              <TermLink>이용약관</TermLink>
              <TermLink style={{ fontWeight: "700" }}>
                개인정보처리방침
              </TermLink>
            </TermList>
            <SNSList>
              <SNSLink
                href="https://www.instagram.com/kream.co.kr/"
                target="_blank"
              >
                <SNSImg src="images/instar.png" />
              </SNSLink>
              <SNSLink
                href="https://www.facebook.com/KREAM.co.kr"
                target="_blank"
              >
                <SNSImg src="images/facebook.png" />
              </SNSLink>
              <SNSLink href="https://pf.kakao.com/_adpxlxb" target="_blank">
                <SNSImg src="images/chplus.png" />
              </SNSLink>
            </SNSList>
          </Row>
          <BusinessTitle>
            크림 주식회사 · 대표 김창욱
            <Blank />
            사업자등록번호 : 570-88-01618{" "}
            <a
              style={{ color: " rgba(34, 34, 34, 0.5)" }}
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5708801618"
            >
              사업자정보확인
            </a>
            <Blank />
            통신판매업 : 제 2021-성남분당C-0093호
            <Blank />
            사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1,
            8층
            <Blank />
            호스팅 서비스 : 네이버 클라우드 ㈜
          </BusinessTitle>
          <Guarantee>
            <span style={{ fontWeight: "700", color: "black" }}>
              신한은행 채무지급보증 안내
            </span>
            <br />
            당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을
            체결하여 안전거래를 보장하고 있습니다.{" "}
            <span
              onClick={() => setIsModal(true)}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              서비스가입 사실 확인
            </span>
          </Guarantee>
          <Notice>
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
            상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
            의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
            거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에
            대한 책임은 크림(주)에 있습니다.
          </Notice>
        </Column>
      </CorporationContainer>
    </>
  );
};

const CorporationContainer = styled.div`
  /* background-color: red; */
  width: 95%;
  border-top: 1px solid #eaeaea;
  padding: 30px 0;
`;

const TermList = styled.div`
  padding-bottom: 16px;
`;

const TermLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  margin-right: 20px;
`;

const BusinessTitle = styled.div`
  max-width: 653px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
`;

const SNSList = styled.div`
  margin-left: auto;
`;

const SNSLink = styled.a`
  margin: 0 0 0 20px;
`;

const SNSImg = styled.img`
  width: 20px;
  height: 20px;
`;

const Blank = styled.span`
  margin-right: 17px;
`;

const Guarantee = styled.div`
  font-size: 12px;
  padding: 40px 0 8px;
  color: rgba(34, 34, 34, 0.5);
  line-height: 20px;
`;

const Notice = styled.div`
  font-size: 12px;
  max-width: 605px;
  padding: 12px 0 0px;
  color: rgba(34, 34, 34, 0.5);
`;

const ModalWrap = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #444444a5;
  z-index: 3;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
`;

const Modal = styled.div`
  width: 30%;
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
  top: 20px;
  left: 90%;
  cursor: pointer;
`;

export default Corporation;
