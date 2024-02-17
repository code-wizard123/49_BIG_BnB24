import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HeroContent = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('./background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          margin: "2rem",
          marginTop: "1rem",
          color: "white",
          height: "100vh",
          padding: "40px",
          borderRadius: "10px",
          backdropFilter: "blur(100px)",
          backgroundColor: "rgba(255,255,255,0.13)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid item xs={12}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "56px",
                  fontFamily: "Rubik Doodle Shadow, system-ui",
                  fontWeight: 400,
                  fontStyle: "normal",
                }}
              >
                Welcome to MusiX
              </h1>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.4",
                  marginTop: "24px",
                }}
              >
                Musix is a platform dedicated to music lovers. Whether youre a
                musician, a music enthusiast, or just someone who enjoys
                listening to music, Musix has something for you. With a vast
                collection of songs from various genres, you can discover new
                music, create playlists, and share your favorite tracks with
                others. Our user-friendly interface allows you to easily
                navigate through the music library, search for specific songs or
                artists, and customize your listening experience. Whether youre
                in the mood for upbeat tunes to get you energized or soothing
                melodies to help you relax, Musix has it all.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <img
              style={{
                position: "absolute",
                right: "3rem",
                width: "300px",
                height: "300px",
                borderRadius: "10px",
              }}
              src="./hero.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroContent;
