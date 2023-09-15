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
import styled from "styled-components";

const Footer12 = () => {
  const RedBackgroundCardContent = styled.div`
    background-color: red;
  `;
  return (
    <>
      <div
        style={{
          marginTop: "65px",
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
            background: "#F8F8F8",
          }}
        >
          {/* <Paper elevation={0} /> */}

          <Paper elevation={0} className="paper-01">
            <div>
              <img className="Foote-ligo" src={logo1} alt="Image 1" />
            </div>
          </Paper>

          <Paper elevation={0}>
            <>
              <Box
                sx={{
                  minWidth: 275,
                  background: "#F8F8F8",
                  backgroundColor: "#F8F8F8",
                }}
              >
                <CardContent className="last-card-content last-card-content">
                  <Typography
                    className="footer-end last-card-content"
                    component="div"
                  >
                    Contact Us
                  </Typography>

                  <span className="l1-footer last-card-content">
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near
                    YTM Market, XYZ-343434
                  </span>
                  <span className="l2-footer last-card-content">
                    example2020@gmail.com{" "}
                  </span>
                  <span className="l3-footer last-card-content">
                    (904) 443-0343{" "}
                  </span>
                </CardContent>
              </Box>
            </>
          </Paper>
          <Paper elevation={0}>
            <>
              <span sx={{ minWidth: 275 }}>
                <CardContent className="last-card-content">
                  <Typography className="footer-end" component="div">
                    More
                  </Typography>

                  <div
                    className="link-footer last-card-content"
                    component="div"
                  >
                    <Link
                      href="#"
                      underline="hover"
                      className="last-card-content"
                    >
                      {"About Us"}
                    </Link>
                  </div>
                  <div
                    className="link-footer last-card-content"
                    component="div"
                  >
                    <Link
                      href="#"
                      underline="hover"
                      className="last-card-content"
                    >
                      {"Products"}
                    </Link>
                  </div>
                  <div
                    className="link-footer last-card-content"
                    component="div"
                  >
                    <Link
                      href="#"
                      underline="hover"
                      className="last-card-content"
                    >
                      {"Career"}
                    </Link>
                  </div>
                  <div
                    className="link-footer last-card-content"
                    component="div"
                  >
                    <Link
                      href="#"
                      underline="hover"
                      className="last-card-content"
                    >
                      {'Contact Us"'}
                    </Link>
                  </div>
                </CardContent>
              </span>
            </>
          </Paper>
          <Paper elevation={0}>
            <>
              <span>
                <div className="footer-h55 last-card-content">
                  <a
                    href="https://www.instagram.com"
                    className="last-card-content"
                  >
                    <Instagram fontSize="large" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="last-card-content"
                  >
                    <Twitter fontSize="large" />
                  </a>
                  <a href="https://www.facebook.com">
                    <Facebook fontSize="large" className="last-card-content" />
                  </a>
                </div>
              </span>
              <span
                style={{
                  justifyContent: "end",
                  display: "flex",
                  alignItems: "end",
                }}
                className="last-card-content"
              >
                © 2022 Food Truck Example
              </span>
            </>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default Footer12;
