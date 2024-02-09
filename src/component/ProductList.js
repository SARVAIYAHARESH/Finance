import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, Chip } from "@mui/material";
import { h5FontSize, pFontSize } from "../Style";

export default function ActionAreaCard({
  imgUrl,
  name,
  color,
  storage,
  price,
  save,
}) {
  const [clickedChipIndex, setClickedChipIndex] = React.useState(-1);

  const handleClick = (index) => {
    setClickedChipIndex(index);
  };
  

  return (
    <Card
      variant="outlined"
      className="w-full border-solid border-2 border-gray-700 rounded-lg flex-col justify-start items-center z-1 "
    >
      <Box className=" px-2 pt-2 ">
        <Box
          overflow={"hidden"}
          className="w-full h-48 sm:h-48 md:h-68 lg:h-72"
        >
          <CardMedia
            component="img"
            image={imgUrl}
            alt="green iguana"
            className="object-cover "
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="bold"
            fontSize={h5FontSize}
          >
            {name}
          </Typography>
          <Typography variant="p" fontSize={pFontSize}>
            Colour : {color}
          </Typography>
          <CardActions>
            <Box className="-ml-4 mb-2 flex flex-wrap">
              {storage &&
                storage.map((size, index) => (
                  <Chip
                    label={size}
                    onClick={() => handleClick(index)}
                    variant={clickedChipIndex === index ? "outlined" : "filled"}
                    key={index}
                    className="font-bold mr-2"
                  />
                ))}
            </Box>
          </CardActions>

          <Box
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            gap={"10px"}
          >
            <Typography variant="h5" fontWeight="bold" fontSize={h5FontSize}>
              RM {price}
            </Typography>
            <Typography
              variant="p"
              fontWeight="bold"
              fontSize={pFontSize}
              color="#3d63cc"
            >
              save ₹{save}.00
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Button
        variant="contained"
        sx={{width:'calc(100% + 4px)'}}
        disableElevation
        className=" h-16  rounded-none  bg-[#00388d]"
      >
        Buy Now
      </Button>
    </Card>
  );
}
