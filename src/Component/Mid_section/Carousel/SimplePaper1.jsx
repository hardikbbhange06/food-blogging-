import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {  CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grilled from "../../IMG/grilled-1.png";
import grilled_4 from "../../IMG/grilled-4.png";
import grilled_5 from "../../IMG/meal-prep-5.png";
import grilled_6 from "../../IMG/meal-prep-6.png";





export default function SimplePaper1() {
  const handleExploreNowClick = () => {
    // Replace 'your_url_here' with the actual URL you want to open in a new tab.
    window.open('your_url_here', '_blank');
  };
  return (
    <Box
       className="BOXXX-har" 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          display: 'flex',

          width: "381px",
          height: "554px",
        },
      }}
    >
     
      <Paper elevation={3} >
        <span>
        <div style={{justifyContent:"center",display:"flex"}}>
        <Box>
                    <img className="Grilled-1" src={grilled_4} alt="Image 1" />
      </Box>
        </div>
        <div className='sesex-12'>
        <CardContent>
        <Typography className='raphy-51' gutterBottom variant="h5" component="div">
        How To Grill Corn                </Typography>
        <Typography variant="body2" color="text.secondary">
        PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </Typography>
        <div className='dis-55-s'>
        <button className='BUtton-12' variant="outline-secondary"onClick={handleExploreNowClick}>Read More</button>

        </div>

      </CardContent>
        </div>
     

        </span>
      </Paper>


      <Paper elevation={3} >
        <span>
        <div style={{justifyContent:"center",display:"flex"}}>
        <Box>
                    <img className="Grilled-1" src={grilled_5} alt="Image 1" />
      </Box>
        </div>
        <div className='sesex-12'>
        <CardContent>
        <Typography className='raphy-51' gutterBottom variant="h5" component="div">
        Crunchwrap Supreme                </Typography>
        <Typography variant="body2" color="text.secondary">
        PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...        </Typography>
        <div className='dis-55-s'>
        <button className='BUtton-12' variant="outline-secondary"onClick={handleExploreNowClick}>Read More</button>

        </div>

      </CardContent>
        </div>
     

        </span>
      </Paper>
      <Paper elevation={3} >
        <span>
        <div style={{justifyContent:"center",display:"flex"}}>
        <Box>
                    <img className="Grilled-1" src={grilled_6} alt="Image 1" />
      </Box>
        </div>
        <div className='sesex-12'>
        <CardContent>
        <Typography className='raphy-51' gutterBottom variant="h5" component="div">
        Crunchwrap Supreme                </Typography>
        <Typography variant="body2" color="text.secondary">
        PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...        </Typography>
        <div className='dis-55-s'>
        <button className='BUtton-12' variant="outline-secondary"onClick={handleExploreNowClick}>Read More</button>

        </div>

      </CardContent>
        </div>
     

        </span>
      </Paper>      

    </Box>
  );
}
