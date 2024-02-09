import React from "react";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import { h4FontSize, pFontSize } from "../Style";

export default function ServicesItem({ imgUrl, title, discription, height }) {
  return (
    <>
      <Card className="rounded-3xl flex-col justify-between shadow-md h-full">
        <CardActionArea>
          {
            <CardMedia
              component="img"
              image={imgUrl}
              alt="green iguana"
              className={`rounded-t-3xl ${
                height
                  ? 'h-[200px] sm:h-[300px] md:h-[450px]'
                  : 'h-[130px] sm:h-[150px] md:h-[170px]'
              }`}
            />
          }
          <CardContent className="text-center">
            <Typography
              gutterBottom
              variant="h5"
              fontWeight='bold'
              fontSize={h4FontSize}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              paddingBottom={height ? "60px" : "30px"}
              color={"gray"}
              fontWeight='bold'
              fontSize={pFontSize}
            >
              {discription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
