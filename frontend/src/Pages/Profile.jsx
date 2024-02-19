import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import NFTCard from "../Components/NFTCard/NFTCard";
import BasicTable from "../Components/BasicTable";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

const Profile = () => {
    return (
        <div>
            <Navbar />
            <ProfileCard name={"Ishaan Chandak"} sx={{ paddingTop: "10vh" }} />
            <Box
                sx={{
                    color: "white",
                    padding: "5rem",
                    paddingTop: "0px",
                    marginTop: "3rem",
                }}
            >
                <Typography variant="h4" sx={{ paddingLeft: "1rem" }}>
                    Songs Bought
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
        </div>
    );
};

export default Profile;
