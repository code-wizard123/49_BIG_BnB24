import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import NFTCard from "../Components/NFTCard/NFTCard";
import BasicTable from "../Components/BasicTable";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          color: "white",
          padding: "5rem",
          paddingTop: "0px",
          marginTop: "3rem",
        }}
      >
        <Typography sx={{ paddingLeft: "2rem" }} variant="h3">
          Profile
        </Typography>
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.17)",
            borderRadius: "10px",
            padding: "3rem",
            margin: "2rem",
          }}
        >
          <BasicTable />
        </Box>
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.17)",
            borderRadius: "10px",
            padding: "3rem",
            margin: "2rem",
          }}
        >
          <Typography variant="h4" sx={{ paddingLeft: "1rem" }}>
            Songs uploaded
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              columnGap: "5rem",
            }}
          >
            {[1, 2, 3].map((index) => (
              <Grid item key={index} sx={{ padding: "0px" }}>
                <NFTCard id={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
