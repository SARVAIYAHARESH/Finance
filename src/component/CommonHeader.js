import React from "react";
import { h4FontSize, textButton } from "../Style";
import { Box, Typography, Button } from "@mui/material";
export default function CommonHeader({ title, disc, color,value }) {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h4"
          color={color ? color : "black"}
          fontWeight="bold"
          fontSize={h4FontSize}
        >
          {title}
        </Typography>
        {!value ?<Button
          variant="text"
          color="primary"
          className={`${textButton.font} text-${color ? color : "blue"} `}
        >
          View All
        </Button>:''}
        
      </Box>
      <Typography
            variant="body2"
            color={color ? color : "gray"}
            fontWeight="bold"
            marginBottom="30px"
          >
            {disc}
          </Typography>
    </>
  );
}
