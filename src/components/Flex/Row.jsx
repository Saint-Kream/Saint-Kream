import { styled } from "styled-components";

const Row = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
  height,
}) => {
  return (
    <StyledRow style={{ gap, justifyContent, alignItems, width, height }}>
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
`;
