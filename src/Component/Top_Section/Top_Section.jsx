import React from "react";
import "./Top_Section.css";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import logo1 from "../IMG/Logo.png";

const Top_Section = () => {

  const handleExploreNowClick = () => {
    // Replace 'your_url_here' 
    window.open('your_url_here', '_blank');
  };
  return (
    <>
      <Box
        style={{}}
        sx={{
            justifyContent:"space-between",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 0,
            //   width: 128,
            //   height: 128,
          },
        }}
      >
        {/* <Paper elevation={0} /> */}
        <Paper elevation={0}>
          <Box className="title">
            <div>
              <aside>
                <img className="img_har" src={logo1} alt="Image 1" />
              </aside>
              <aside></aside>
              <div className="Typography_har">
                <>
                  <Typography className="myTypography">
                    Discover the{" "}
                    <span style={{ color: "rgba(226, 55, 68, 1)" }}>Best</span>{" "}
                    Food and Drinks
                  </Typography>
                </>
              </div>
              <div className="Typography_har12">
                <>
                  <Typography className="myTypography12">
                    Naturally made Healthcare Products for the better care &
                    support of your body.
                  </Typography>
                </>
              </div>
              <div>
              <button className="custom-button" onClick={handleExploreNowClick}>
                  Explore Now!
                </button>              </div>
            </div>
          </Box>
        </Paper>
        <Paper elevation={0} className="content">
          <Box >
            <div className="image-container">
              <div className="background-image"></div>

              <>
                <div
                  className="regular-image"
                  //  src={IMG11} alt="Image 11"
                >
                  <button className="custom-button-Touch" onClick={handleExploreNowClick}>Get In Touch</button>
                </div>
              </>
            </div>
          </Box>
        </Paper>
        {/* <Paper elevation={3} /> */}
      </Box>
    </>
  );
};

export default Top_Section;
