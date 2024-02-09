import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  CardContent,
  Card,
  Rating,
  Container
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { body2FontSize, pFontSize } from "../Style";
import CommonHeader from "./CommonHeader";

export default function RateUs() {
  const [value, setValue] = useState(2);

  return (
    <Container maxWidth='xl' disableGutters>
    <Box
      p={"30px"}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row", md: "row" }}
      gap={"20px"}
    >
      <Box>
        <CommonHeader value={true} title={'What Customer Say About Us'} disc={' Lorem Ipsum is simply dummy text of the printing and typesetting industry'}/>
      </Box>
      <Box
        flex={"1 0 auto"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Card className="p-6 sm:p-6 md:p-7 max-w-[300px] sm:max-w-[400px] md:max-w-[550px] z-10 rounded-2xl">
          <CardContent>
            <Typography
              variant="body2"
              fontSize={pFontSize}
              fontWeight="bold"
            >
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy simply dummy
              text of the printing and typesetting industry.
            </Typography>
            <Box display="flex" mt={"20px"}>
              <Avatar
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                alt="User Photo"
                src="path_to_user_photo.jpg"
              />
              <Box ml={"10px"}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  fontSize={body2FontSize}
                >
                  John Doe
                </Typography>
                <Rating
                  name="simple-controlled"
                  fontSize={body2FontSize}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
        className="p-4 sm:p-5 md:p-8 max-w-[300px] sm:max-w-[400px] md:max-w-[550px] mt-[-120px] sm:mt-[-140px] md:mt-[-130px] lg:mt-[-150px] mr-[-60px] rounded-2xl"
        >
          <CardContent>
            <Typography
              variant="body2"
              fontSize={pFontSize}
              fontWeight="bold"
            >
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy simply dummy
              text of the printing and typesetting industry.
            </Typography>
            <Box display="flex" mt={"20px"}>
              <Avatar
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                alt="User Photo"
                src="path_to_user_photo.jpg"
              />
              <Box ml={"10px"}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  fontSize={body2FontSize}
                >
                  John Doe2
                </Typography>
                <Rating
                  name="simple-controlled"
                  fontSize={body2FontSize}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
      display={{ xs: "none", sm: "flex", md: "flex" }}
      flexDirection={'column'}
        pt={'160px'}
      >
        <KeyboardArrowUpIcon  />
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
    </Container>
  );
}
