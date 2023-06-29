import React from "react";
import styled from "styled-components";

const More = () => {
  return (
    <BtnWrap>
      <ViewMoreBtn href="#">더보기</ViewMoreBtn>
    </BtnWrap>
  );
};

const ViewMoreBtn = styled.a`
  padding: 0 30px;
  margin-top: 20px;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  display: inline-flex;
  border-radius: 12px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  text-decoration: none;
  color: rgba(34, 34, 34, 0.8);
  cursor: pointer;
`;

const BtnWrap = styled.div`
  text-align: center;
  padding: 0 32px;
`;

export default More;
