import {Container, Box, Typography } from "@mui/material";
import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PersonIcon from "@mui/icons-material/Person";
import { FaHandHoldingDollar } from "react-icons/fa6";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CommonHeader from "./CommonHeader";

const DigitalCorporate = "./assets/images/DigitalCorporate.jpg";
const Shariah = "./assets/images/Shariah.avif";
export default function Calculator() {
  const benifit = [
    {
      color: "orange",
      icon: DescriptionOutlinedIcon,
      Disc: "Registered with SKM Malaysia",
    },
    {
      color: "darkred",
      icon: HowToRegIcon,
      Disc: "Nationwide Membership",
    },
    {
      color: "lightGreen",
      icon: AutoFixHighIcon,
      Disc: "Enhanced Market Access",
    },
    {
      color: "skyblue",
      icon: PersonIcon,
      Disc: "Great Members Benefits ",
    },
    {
      color: "darkBlue",
      icon: FaHandHoldingDollar,
      Disc: "Access to Financial Services",
    },
  ];

  const renderBenifit = benifit.map((value, index) => (
    <Box
      key={index}
      display={"flex"}
      mb={{ xs: "9px", sm: "13px", md: "18px" }}
      alignItems={"center"}
    >

      <Box
        height={{ xs: "30px", sm: "40px", md: "60px" }}
        width={{ xs: "30px", sm: "40px", md: "60px" }}
        bgcolor={value.color}
        borderRadius={"10px"}
        mr={{ xs: 1, md: 2 }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <value.icon className="text-white text-2xl md:text-4xl" />
      </Box>
      <Typography
        variant="body1"
        fontWeight={"bold"}
      >
        {value.Disc}
      </Typography>
    </Box>
  ));

  return (
     <Container maxWidth='xl' disableGutters> 
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
      p={"30px" }
    >
      <Box width={"100%"}>
      <CommonHeader value={true} title={'Why Koperasi FK Capital Berhad?'} disc={' Leading credit community institution in Malaysia'}/>
        
        {renderBenifit}
      </Box>
      <Box
        mt={"30px"}
        width={"100%"}
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        justifyContent={"space-between"}
        gap={"20px"}
        >
        <Box width={{ xs: "100%", sm: "50%", md: "50%" }}>
          <Box
            width={"100%"}
            mb={"20px"}
            borderRadius={{ xs: "30px", sm: "40px", md: "50px" }}
            height={"90%"}
            overflow={"hidden"}
          >
            <img
              src={DigitalCorporate}
              alt="Digital Corporate"
              className="object-cover h-full"
              />
          </Box>
          <Typography
            variant="body1"
            textAlign={"center"}
            fontWeight={"bold"}
            >
            Digital Cooperative
          </Typography>
        </Box>
        <Box width={{ xs: "100%", sm: "50%", md: "50%" }}>
          <Box
            width={"100%"}
            mb={"20px"}
            borderRadius={{ xs: "30px", sm: "40px", md: "50px" }}
            height={"90%"}
            overflow={"hidden"}
          >
            <img src={Shariah} alt="Shariah " className="object-cover h-full" />
          </Box>
          <Typography
            variant="body1"
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Shariah Compliant
          </Typography>
        </Box>
      </Box>
    </Box>
            </Container>
  );
}
