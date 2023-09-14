import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import logo1 from "../IMG/Logo.png";
import "./Footer12.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer12 = () => {
  return (
    <>
      <div
        style={{
          marginTop: "400px",
        }}
        className="Footer11"
      >
     
        <Box
       className="FFFoooter" 
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "90%",
            height: "90%",
            "& > :not(style)": {
              m: 6,

              width: "228px",
              background: "#F8F8F8",
            },
            background: "#F8F8F8"
          }}
        >
          {/* <Paper elevation={0} /> */}

          <Paper elevation={3} className="paper-01">
            <div>
              <img className="Foote-ligo" src={logo1} alt="Image 1" />
            </div>
          </Paper>

          <Paper elevation={3}>
            <>
              <Box sx={{ minWidth: 275 ,background: "#F8F8F8",backgroundColor:"#F8F8F8" }}>
                <CardContent>
                  <Typography className="footer-end" component="div">
                    Contact Us
                  </Typography>

                  <span className="l1-footer">
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near
                    YTM Market, XYZ-343434
                  </span>
                  <span className="l2-footer">example2020@gmail.com </span>
                  <span className="l3-footer">(904) 443-0343 </span>
                </CardContent>
              </Box>
            </>
          </Paper>
          <Paper elevation={3}>
            <>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography className="footer-end" component="div">
                    More
                  </Typography>

                  <div className="link-footer" component="div">
                    <Link href="#" underline="hover">
                      {"About Us"}
                    </Link>
                  </div>
                  <div className="link-footer" component="div">
                    <Link href="#" underline="hover">
                      {"Products"}
                    </Link>
                  </div>
                  <div className="link-footer" component="div">
                    <Link href="#" underline="hover">
                      {"Career"}
                    </Link>
                  </div>
                  <div className="link-footer" component="div">
                    <Link href="#" underline="hover">
                      {'Contact Us"'}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </>
          </Paper>
          <Paper elevation={3}>
            <>
                <span>
                <div className="footer-h55">
      <a href="https://www.instagram.com">
        <Instagram fontSize="large" />
      </a>
      <a href="https://www.twitter.com">
        <Twitter fontSize="large" />
      </a>
      <a href="https://www.facebook.com">
        <Facebook fontSize="large" />
      </a>
    </div>
                </span>
                <span style={{
                    justifyContent:"end",display:"flex",alignItems:"end",
                }}>© 2022 Food Truck Example</span>

            </>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default Footer12;
