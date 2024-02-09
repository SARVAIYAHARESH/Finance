import React from "react";
import {Container,  Box } from "@mui/material";
import MemberShipItem from "./MemberShipItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonHeader from "./CommonHeader";
const dividend = "./assets/images/Dividend.jpg";
const insurance = "./assets/images/insurance.jpg";
const fund = "./assets/images/Fund.jpg";

export default function MemberShip() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <Box p="30px" className="bg-[#00388d] ">
       <Container maxWidth='xl' disableGutters>

      <CommonHeader color={'white'} title={'Membership Benefits'} disc={'Join our cooperative membership for numerous benefits, including financial services and community support.'}/>
      

      <Slider {...settings}>
        <MemberShipItem
          imgUrl={dividend}
          name={"Competitive dividends"}
          dicription={
            "Our cooperative rewards members with Members great business ventures with competitive dividends and continued support."
          }
        />
        <MemberShipItem
          imgUrl={insurance}
          name={"Exclusive Insurance & Will Rebates"}
          dicription={
            "Special Members discounts \n Auto Insurance (5%)\n CCM Insurance Packages\n Life Insurance and more"
          }
        />
        <MemberShipItem
          imgUrl={fund}
          name={"Special Funds for  members"}
          dicription={
            "Emergency Funds Education Aid Medical Expenses And more."
          }
        />
        <MemberShipItem
          imgUrl={dividend}
          name={"Special Funds for  members"}
          dicription={
            "Emergency Funds Education Aid Medical Expenses And more."
          }
        />
      </Slider>
       </Container>
    </Box>
  );
}
