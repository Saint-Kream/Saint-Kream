import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import dummy from "../../dummy";

const MainSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    prevArrow: <PrevArrow src="images/prevArrow.png" alt="PREVARROW" />,
    nextArrow: <NextArrow src="images/nextArrow.png" alt="NEXTARROW" />,
  };
  return (
    <Slider {...settings}>
      {dummy.map((o) => (
        <Indexing key={o.id} color={o.color}>
          <SlideImg src={o.src} alt={`MAINSLIDEIMG${o.id}`} />
        </Indexing>
      ))}
    </Slider>
  );
};

const PrevArrow = styled.img`
  height: 40px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
`;

const NextArrow = styled.img`
  height: 40px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Indexing = styled.div`
  /* width: 100%; */
  height: 480px;
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
`;

const SlideImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  /* width: 100%; */
`;

export default MainSlider;
