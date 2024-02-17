import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Button, CardActionArea, CardActions } from '@mui/material';
import NFTCard from '../Components/NFTCard/NFTCard';
import './Marketplace.css'


const ProductCard = ({ imageUrl, title, price }) => (
  <Card sx={{ padding: '0px' }}>
    <CardMedia
      component="img"
      alt={title}
      height="140"
      image={imageUrl}
    />
    <Box sx={{
      paddingLeft: "20px",
      paddingTop: "20px"
    }}>
      <Grid container sx={{ padding: '0px' }}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" color="textSecondary">{title}</Typography>
          <Typography variant="body1" color="textPrimary">${price}</Typography>
        </Grid>
        <Grid xs={6} item sx={{ justifyContent: 'center', display: 'flex' }}>
          <PlayCircleOutlineIcon fontSize='large' />
        </Grid>
        <Grid item xs={12} sx={{ justifyContent: "center", display: 'flex' }}>
          <CardActions>
            <Button size="small" color="primary">
              Buy
            </Button>
            <Button size="small" color="primary">
              Bid
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

const Marketplace = () => {
  const theme = useTheme();
  return (
    <div>
      <Navbar />
      <div className='blurredFilter'>
        <div className='beautifulBackground'>
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class='line-text'>Some Trending Songs</div>
            <Grid>
              {/* <Grid>
              <Card sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'black' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'blue' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Mac Miller
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                      {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                  alt="Live from space album cover"
                />
              </Card>
            </Grid> */}
              <Grid>
                <Grid sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '5vw' }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                    <Grid item key={index} sx={{ padding: '0px' }}>
                      <NFTCard />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Marketplace;

