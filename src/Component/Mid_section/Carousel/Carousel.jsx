import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Container } from "@mui/material";
import "./Carousel.css";
import SimplePaper from "./SimplePaper";
import SimplePaper1 from "./SimplePaper1";

const steps = [
  {
    label: "",
    description: (
      <>
        <SimplePaper />
      </>
    ),
  },
  {
    label: "",
    description: (
      <>
        <SimplePaper1 />
      </>
    ),
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Container
      // maxWidth="sm"
      >
        <Box sx={{ flexGrow: 1,  }}>
          <Paper
          className="paper70"
          style={{
            marginTop:"70px"
          }}
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              // pl: 2,
              bgcolor: "background.default",
            }}
          >
          
            <span>
              <Typography className="myTypography">
                <span className="hararar-123">Latest Articles</span>
              </Typography>
            </span>
          </Paper>
          <Box
            className="PPaper-harp"
            sx={{ display: "flex", flexWrap: "wrap",
            // width:"1125px",
            // height:"679px"

          
             }}
          >
            {steps[activeStep].description}
          </Box>
          <div  style={{}}>
            <MobileStepper
            className="seri-88"
              variant="text"
              steps={maxSteps}
              position="static"
              
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  variant="contained"
                  color="primary"
                >
                  {/* Next */}
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  variant="contained" // You can change the color to your preferred color
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  {/* Back */}
                </Button>
              }
            />
            <Typography variant="caption" align="center">
              {activeStep === maxSteps - 1 ? "" : ""}
            </Typography>
          </div>
        </Box>
      </Container>
    </>
  );
}
