import React from "react";
import { body1FontSize } from '../Style';
import { Box, Button, Typography,Container } from "@mui/material";

const backgroundImage = "./assets/images/image.svg";

export default function Advertisement() {
  return (
    <Box className='relative'>
      <Box
        className="bg-cover bg-center h-full text-white p-[30px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <Container maxWidth='xl' disableGutters>
        <Box mt={10} mb={10}>
          <Typography variant="h3" fontWeight="bold" mb="30px">
            FKC.COOP
          </Typography>
          <Typography
            variant="h6"
            style={{ fontSize: body1FontSize }}
            textAlign="justify"
            width={{xs:'100%',md:"60%"}}
            mb="20px"
          >
            A Malaysian cooperative established in 2019 under Suruhanjaya
            Koperasi Malaysia (SKM), committed to providing credit facilities,
            driving digitalisation, and supporting e-commerce. Our mission is to
            uplift the underserved, enable digitalisation for all, and be among
            the best cooperative movement in Malaysia and the world.
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            className="font-bold"
          >
            Apply For Finance
          </Button>
        </Box>
          </Container>
      </Box>
    </Box>
  );
}
