import { Box, Grid, Typography } from "@mui/material";
import "./HeroContent.css";
import NFTCard from "../NFTCard/NFTCard";
import { useState } from "react";
import { ethers } from "ethers";
import MarketplaceJSON from "../../contractJson/Marketplace.json";
import { GetIpfsUrlFromPinata } from "../../utils";
import axios from "axios";

const HeroContent = () => {
    const [data, updateData] = useState();
    const [dataFetched, updateFetched] = useState(false);

    async function getAllNFTs() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let contract = new ethers.Contract(
            MarketplaceJSON.address,
            MarketplaceJSON.abi,
            signer
        );
        //create an NFT Token
        let transaction = await contract.getAllNFTs();
        // console.log(1, transaction);

        //Fetch all the details of every NFT from the contract and display
        let items = await Promise.all(
            transaction.map(async (i) => {
                var tokenURI = await contract.tokenURI(i.tokenId);
                // console.log(tokenURI);
                // console.log("Cover Image tokenUri", tokenURI);
                tokenURI = GetIpfsUrlFromPinata(tokenURI);
                // console.log("Music from Pinata ", tokenURI);
                let meta = await axios.get(tokenURI);
                meta = meta.data;

                let price = ethers.utils.formatUnits(
                    i.price.toString(),
                    "ether"
                );
                // console.log(meta);
                let item = {
                    price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    cover: meta.cover,
                    music: meta.music,
                    songName: meta.songName,
                    albumName: meta.albumName,
                };
                // console.log(item);

                return item;
            })
        );
        // console.log("items1", items);
        // console.log(items.slice(0, 3));
        function shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        }
        items = shuffleArray(items);
        // console.log("items2", items);
        updateFetched(true);
        updateData(items);
    }

    if (!dataFetched) getAllNFTs();

    return (
        <Box
            sx={{
                backgroundImage: "url('./background.jpg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
            }}
        >
            <Box
                sx={{
                    margin: "2rem",
                    marginTop: "1rem",
                    color: "white",
                    padding: "3rem 2rem 4rem 2rem",
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
                                    fontFamily: "Protest Guerrilla, sans-serif",
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
                                Musix is a platform dedicated to music lovers.
                                Whether youre a musician, a music enthusiast, or
                                just someone who enjoys listening to music,
                                Musix has something for you. With a vast
                                collection of songs from various genres, you can
                                discover new music, create playlists, and share
                                your favorite tracks with others. Our
                                user-friendly interface allows you to easily
                                navigate through the music library, search for
                                specific songs or artists, and customize your
                                listening experience. Whether youre in the mood
                                for upbeat tunes to get you energized or
                                soothing melodies to help you relax, Musix has
                                it all.
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
            <Box
                sx={{
                    margin: "2rem",
                    color: "white",
                    padding: "2rem 3rem",
                    borderRadius: "10px",
                    backdropFilter: "blur(50px)",
                    backgroundColor: "rgba(255,255,255,0.13)",
                }}
            >
                <h1
                    className="line-text"
                    style={{
                        margin: 0,
                        fontSize: "56px",
                        fontWeight: 400,
                    }}
                >
                    Trending Now
                </h1>
                <Grid
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        columnGap: "3rem",
                    }}
                >
                    {data &&
                        data.slice(0, 3).map((value, index) => (
                            <Grid item key={index} sx={{ padding: "0px" }}>
                                <NFTCard value={value} />
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default HeroContent;
