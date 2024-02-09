import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const logoImage = "./assets/images/logo.png";
export default function Footer() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const addGrid = <>
  <Grid item xs={12} sm={6} md={2} >
    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      Product
    </Typography>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      Services
    </Typography>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      Calculator
    </Typography>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      About us
    </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} md={2}>
  <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      Terms and Condition
    </Typography>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      Privacy Policy
    </Typography>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      Products
    </Typography>
    <Typography
      variant="h6"
      fontWeight={"bold"}
    >
      Contact us
    </Typography>
    </Box>
  </Grid>
</>;

  return (
    <Box bgcolor={"#ebf3ff"} p={"30px"}>
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display={"flex"}
            flexDirection={"column"}
          >
            <img alt="abc" src={logoImage} className="h-fit w-fit mb-5" />
            <Box display={"inline-flex"} mb={"10px"}>
              <LocalPhoneIcon className="mr-3" />
              <Typography variant="body1" fontWeight={"bold"}>
                +603 9054 3977 (Local & Overseas)
              </Typography>
            </Box>
            <Box display={"inline-flex"} mb={"10px"}>
              <LocalPhoneIcon className="mr-3" />
              <Typography fontWeight={"bold"} variant="body1">
                +603 9054 9188 (Hunting Line)
              </Typography>
            </Box>
            <Box display={"inline-flex"} mb={"10px"}>
              <EmailIcon className="mr-3" />
              <Typography fontWeight={"bold"} variant="body1">
                info@fkc.coop
              </Typography>
            </Box>
          </Grid>
          {!isMdScreen && (
            addGrid
          )}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" fontWeight={"bold"}>
              SUBSCRIBE NEWSLETTER
            </Typography>
            <Typography variant="body1" color="gray" mt={"10px"} mb={"10px"}>
              Dont miss new updates on your email
            </Typography>
            <TextField
              id="email"
              label="Enter email address"
              variant="outlined"
              fullWidth
              type="email"
              InputProps={{
                endAdornment: (
                  <Button
                    disableElevation
                    variant="contained"
                    className="bg-[#00388d] text-white h-[55px] rounded-tl-none rounded-bl-none"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                ),
                style: { paddingRight: "0px" },
              }}
            />

            <Box display={"inline-flex"} mt={"20px"} gap={"20px"}>
              <LinkedInIcon className="text-4xl" />
              <FacebookIcon className="text-4xl" />
              <TwitterIcon className="text-4xl" />
              <YouTubeIcon className="text-4xl" />
            </Box>
          </Grid>
          {isMdScreen && addGrid}
        </Grid>
        <Typography variant="body1" textAlign={"center"} pt={"30px"}>
          Copyright © 2021 FKC.COOP Berhad Registration No. (585257-M) | All
          Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
