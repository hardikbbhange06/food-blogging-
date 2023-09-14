import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {  CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grilled from "../../IMG/grilled-1.png";
import meal_2 from "../../IMG/meal-2.png";
import meal_3 from "../../IMG/meal-3.png";



export default function SimplePaper() {
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
                    <img className="Grilled-1" src={Grilled} alt="Image 1" />
      </Box>
        </div>
        <div className='sesex-12'>
        <CardContent>
        <Typography className='raphy-51' gutterBottom variant="h5" component="div">
        Grilled  Tomatoes at Home
                </Typography>
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
                    <img className="Grilled-1" src={meal_2} alt="Image 1" />
      </Box>
        </div>
        <div className='sesex-12'>
        <CardContent>
        <Typography className='raphy-51' gutterBottom variant="h5" component="div">
        Snacks for Travel                </Typography>
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
                    <img className="Grilled-1" src={meal_3} alt="Image 1" />
      </Box>
        </div>
        <div className='sesex-12'>
        <CardContent>
        <Typography className='raphy-51' gutterBottom variant="h5" component="div">
        Post-workout Recipes                </Typography>
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
