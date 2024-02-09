import {  Box,Container } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonHeader from "./CommonHeader";

const laptop = "./assets/images/Laptop.jpg";
const phone = "./assets/images/Phone.jpg";
const Tablet = "./assets/images/Tablet.jpg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        paddingLeft: "-20px",
      }}
      onClick={onClick}
    >
      <KeyboardArrowRightIcon className="text-3xl text-black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        paddingRight: "-20px",
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeftIcon className="text-3xl text-black" />
    </div>
  );
}

export default function Product() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box p="30px">
      <Container maxWidth='xl' disableGutters>
        <CommonHeader title={'Our Product'} disc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}/>
       

        <Slider  {...settings}>
          <ProductList
            imgUrl={phone}
            name={"Galaxy Z Fold5(Special Edition)"}
            color={"Blue"}
            storage={["256 GB", "512 GB", "1 TB"]}
            price={20000}
            save={5000}
          />
          <ProductList
            imgUrl={laptop}
            name={"Galaxy Z Fold5(Special Edition)"}
            color={"Blue"}
            storage={["256 GB", "512 GB", "1 TB"]}
            price={20000}
            save={5000}
          />
          <ProductList
            imgUrl={laptop}
            name={"Galaxy Z Fold5(Special Edition)"}
            color={"Blue"}
            storage={["256 GB", "512 GB", "1 TB"]}
            price={20000}
            save={5000}
          />
          <ProductList
            imgUrl={laptop}
            name={"Galaxy Z Fold5(Special Edition)"}
            color={"Blue"}
            storage={["256 GB", "512 GB", "1 TB"]}
            price={20000}
            save={5000}
          />

          <ProductList
            imgUrl={Tablet}
            name={"Galaxy Z Fold5(Special Edition)"}
            color={"Blue"}
            storage={["256 GB", "512 GB", "1 TB"]}
            price={20000}
            save={5000}
          />
        </Slider>
        </Container>
      </Box>
    </>
  );
}
