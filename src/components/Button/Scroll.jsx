import React from "react";
import styled from "styled-components";

const Scroll = () => {
  const [isTop, setIsTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop === 0;
      if (y !== true) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollBtn onClick={scrollToTop} isTop={isTop}>
      <ScrollBtnImg src="images/scrollArrow.png" alt="SCROLLARROW" />
    </ScrollBtn>
  );
};

const ScrollBtn = styled.button`
  width: 44px;
  height: 48px;
  border-radius: 25px;
  background-color: white;
  border: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  display: ${(props) => (props.isTop ? "" : "none")};
  box-shadow: 0px 2px 6px #b5b5b5;
`;

const ScrollBtnImg = styled.img`
  margin-top: 6px;
  width: 12.5px;
`;

export default Scroll;
