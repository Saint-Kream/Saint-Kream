import styled from "styled-components";

const Column = ({
  children,
  gap,
  justifyContent = "none",
  alignItems = "none",
  width,
  height,
}) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems, width, height }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
