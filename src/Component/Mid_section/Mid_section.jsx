import React from "react";
import "./Mid_section.css";
import { Box, Container, Paper, Typography } from "@mui/material";
import About from "../IMG/about.png";

const Mid_section = () => {
  const handleExploreNowClick = () => {
    // Replace 'your_url_here' with the actual URL you want to open in a new tab.
    window.open('your_url_here', '_blank');
  };
  return (
    <>
      <>
        <>
          <Box
            className="Card-har"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 0,
                // width: 128,
                // height: 128,
                background:
                  "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
              },
              
              background:
                "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)", // Add your linear gradient here
            }}
          >
            {/* <Paper elevation={0} /> */}
            <>
              <Paper elevation={0}>
                <div className="hard-555">
                  <Box>
                    <img className="IMG-about" src={About} alt="Image 1" />
                  </Box>
                </div>
              </Paper>
              <Paper elevation={0}>
                <div>
                  <Box>
                    <div>
                      <div className="Typography-har-ab">
                        <>
                          <Typography className="myTypography1-ab">
                            About Us
                          </Typography>
                          <Typography className="myTypography121-ab">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error, architecto? Eligendi, quo ex laborum
                            excepturi a delectus culpa eaque voluptate, deleniti
                            quos nisi porro temporibus ad iure quidem blanditiis
                            earum! Earum pariatur a voluptatem tenetur soluta
                            quos esse mollitia
                          </Typography>
                          <button className="custom-button-ab1" onClick={handleExploreNowClick}>
                            Read More
                          </button>
                        </>
                       
                      </div>
                    </div>
                  </Box>
                </div>
              </Paper>
            </>
          </Box>
        </>
      </>
    </>
  );
};

export default Mid_section;
