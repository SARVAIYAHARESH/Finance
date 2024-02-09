import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function MemberShipItem({ imgUrl, name, dicription }) {
  return (
    <Card className="w-full h-72 sm:h-80 md:h-96 lg:h-[400px]   rounded-3xl mb-8 ">
      <CardMedia
        component="img"
        image={imgUrl}
        alt="green iguana"
        className="h-32 sm:h-40 md:h-48"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          fontWeight="bold"
          textAlign="center"
          mb="15px"
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="gray"
          fontWeight="bold"
          textAlign="center"
          whiteSpace="pre-line"
        >
          {" "}
          {dicription}
        </Typography>
      </CardContent>
    </Card>
  );
}
