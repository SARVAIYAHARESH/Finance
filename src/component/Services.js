import React from "react";
import {  Container,Box, Grid } from "@mui/material";
import ServicesItem from "./ServicesItem";
import CommonHeader from "./CommonHeader";
const Insurance = "./assets/images/insurance.jpg";
const Consumer = "./assets/images/cunsumer.jpg";
const Finance = "./assets/images/Finance.jpg";
const Wasiat = "./assets/images/wasiyat.jpg";
const Digitalisation ="./assets/images/digitization.jpg";

export default function Services() {
  return (
    <Box className="p-7">
       <Container maxWidth='xl' disableGutters>
        
      <CommonHeader title={'Our Services'} disc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}/>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6}>
              <ServicesItem
                imgUrl={Finance}
                title={"Financing"}
                discription={
                  "We offer cooperative members reliable financial services tailored to their needs."
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <ServicesItem
                imgUrl={Insurance}
                title={"Insurance"}
                discription={
                  "Our cooperative provides both Islamic and non-Islamic insurance packages to our members' diverse preferences."
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <ServicesItem
                imgUrl={Wasiat}
                title={"Will, Wasiat & Hibah"}
                discription={
                  "Our cooperative provides both Islamic and non-Islamic insurance packages to our members' diverse preferences."
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <ServicesItem
                imgUrl={Digitalisation}
                title={"Digitalisation"}
                discription={
                  "We provide our cooperative members with a variety of digital services, including cloudservers and more."
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ServicesItem
            imgUrl={Consumer}
            height={true}
            title={"Consumer Products"}
            discription={
              "We provide our cooperative members with a variety of consumer goods like Huawei,Samsung, Apple, Tomei Jewelry, Yes5G Postpaid and Prepaid Plans, mobilePostpaid and Prepaid Plans and many more! "
            }
          />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
