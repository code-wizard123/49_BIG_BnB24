import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


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
          pLAY
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
      <div className="bg-transparent">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <Grid container spacing={3} sx={{ padding: "10vh" }}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index} sx={{ padding: '0px' }}>
                <ProductCard
                  imageUrl={`https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-0${index}.jpg`}
                  title="Product Title"
                  price="Price"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      {/* <Container maxWidth="xl" className="mx-auto">
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <Carousel>
            <div>
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" style={{ maxWidth: '200px', maxHeight: '200px' }} alt="Carousel Image 1" />
              <Typography variant="subtitle1" color="textSecondary" className="legend">Legend 1</Typography>
            </div>
            <div>
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" style={{ maxWidth: '200px', maxHeight: '200px' }} alt="Carousel Image 2" />
              <Typography variant="subtitle1" color="textSecondary" className="legend">Legend 2</Typography>
            </div>
            <div>
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" style={{ maxWidth: '200px', maxHeight: '200px' }} alt="Carousel Image 3" />
              <Typography variant="subtitle1" color="textSecondary" className="legend">Legend 3</Typography>
            </div>
          </Carousel>
        </Grid>
      </Container> */}
      {/* <div className="bg-transparent">
        <Container maxWidth="xl" className="mx-auto">
          <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid container spacing={3}>
              {[...Array(4)].map((_, index) => (
                <Grid item key={index} xs={12} sm={6} lg={3}>
                  <ProductCard2 />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div> */}
      <Card sx={{ display: 'flex', justifyContent: 'center' }}>
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
    </div>
  );
}

export default Marketplace;

