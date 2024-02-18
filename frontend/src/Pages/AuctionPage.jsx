import { LineChart } from "../Components/Charts/LineChart";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation, useParams } from "react-router-dom";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import "./Marketplace.css";
import axios from "axios";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import MarketplaceJSON from "../contractJson/Marketplace.json";
import { GetIpfsUrlFromPinata } from "../utils";

function AuctionPage() {
    // 3D tile effect
    useEffect(() => {
        window.onload = () => {
            const pre = document.querySelector("pre");

            document.addEventListener("mousemove", (e) => {
                rotateElement(e, pre);
            });

            function rotateElement(event, element) {
                // get mouse position
                const x = event.clientX;
                const y = event.clientY;
                // console.log(x, y)

                // find the middle
                const middleX = window.innerWidth / 2;
                const middleY = window.innerHeight / 2;
                // console.log(middleX, middleY)

                // get offset from middle as a percentage
                // and tone it down a little
                const offsetX = ((x - middleX) / middleX) * 20;
                const offsetY = ((y - middleY) / middleY) * 20;
                // console.log(offsetX, offsetY);

                // set rotation
                element.style.setProperty("--rotateX", offsetX + "deg");
                element.style.setProperty("--rotateY", -1 * offsetY + "deg");
            }
        };
    }, []);

    const [data, updateData] = useState({});
    const [dataFetched, updateDataFetched] = useState(false);
    const [message, updateMessage] = useState("");
    const [currAddress, updateCurrAddress] = useState("0x");

    async function getNFTData(tokenId) {
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        //Pull the deployed contract instance
        let contract = new ethers.Contract(
            MarketplaceJSON.address,
            MarketplaceJSON.abi,
            signer
        );
        //create an NFT Token
        var tokenURI = await contract.tokenURI(tokenId);
        const listedToken = await contract.getListedForTokenId(tokenId);
        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        let meta = await axios.get(tokenURI);
        meta = meta.data;
        // console.log(meta);
        let item = {
            price: meta.price,
            tokenId: tokenId,
            seller: listedToken.seller,
            owner: listedToken.owner,
            cover: meta.cover,
            music: meta.music,
            songName: meta.songName,
            albumName: meta.albumName,
        };
        // console.log(item);
        updateData(item);
        updateDataFetched(true);
        // console.log("address", addr);
        updateCurrAddress(addr);
    }

    async function buyNFT(tokenId) {
        try {
            //After adding your Hardhat network to your metamask, this code will get providers and signers
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            //Pull the deployed contract instance
            let contract = new ethers.Contract(
                MarketplaceJSON.address,
                MarketplaceJSON.abi,
                signer
            );

            const salePrice = ethers.utils.parseUnits(data.price, "ether");
            updateMessage("Buying the NFT... Please Wait (Upto 5 mins)");
            //run the executeSale function
            let transaction = await contract.executeSale(tokenId, {
                value: salePrice,
            });
            await transaction.wait();

            alert("You successfully bought the NFT!");
            updateMessage("");
        } catch (e) {
            alert("Upload Error" + e);
        }
    }

    const params = useParams();
    const tokenId = params.id;

    if (!dataFetched) getNFTData(tokenId);
    if (typeof data.image == "string")
        data.image = GetIpfsUrlFromPinata(data.image);
    console.log(data);
    return (
        <>
            <Navbar />
            <Box className="blurredFilter mt-28">
                <Box className="beautiful-backgrounds">
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            className="flex justify-center items-center "
                        >
                            <pre
                                contentEditable
                                className="language-css"
                                tabIndex="0"
                            >
                                <img className="nft-img" src={data.cover} />
                            </pre>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2" className="text-white">
                                {data.songName}
                            </Typography>
                            <p>
                                <span className="text-white">Creator: </span>
                                <span className="text-gray-300">
                                    {data.albumName}
                                </span>
                            </p>
                            <div className="flex gap-10 my-10 ">
                                <div className="buynft">
                                    {/* <div> */}
                                    {/* <p className="text-sm font-bold text-white"> */}
                                    <FaEthereum
                                        size={25}
                                        style={{ color: "white" }}
                                    />
                                    {data.price}
                                    {/* </p> */}
                                    {/* </div> */}
                                </div>
                                {/* <AuctionPageCard money="50" /> */}
                                {/* <AuctionPageCard text="Auction" money="99" /> */}
                            </div>
                            <div className="">
                                {/* <TextField
                                    variant="outlined"
                                    className="w-1/2 bg-white rounded-md"
                                /> */}
                                {currAddress != data.owner &&
                                currAddress != data.seller ? (
                                    <Button
                                        onClick={() => buyNFT(tokenId)}
                                        variant="contained"
                                        // className="bg-white"
                                        style={{
                                            backgroundColor: "#ffffff10",
                                            borderStyle: "solid",
                                            borderWidth: "0.1rem",
                                            borderRadius: "8px",
                                            borderColor: "#1d1d1dfc",
                                            fontSize: "1rem",
                                            padding: "0.45rem 2.9rem",
                                        }}
                                    >
                                        Buy Music
                                    </Button>
                                ) : (
                                    <div className="text-green-700 ml-6">
                                        You own of this NFT
                                    </div>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Grid
                    container
                    sx={{
                        padding: "10vw",
                        gap: "10vw",
                    }}
                >
                    <Grid item xs={4}>
                        <h2 className="text-5xl font-bold text-white">
                            Description
                        </h2>
                        <p className="text-lg text-gray-300 mt-10">
                            Space Oddity is the second studio album by English
                            musician David Bowie. It was released by Philips
                            Records on 14 November 1969 and made its debut in
                            the UK Albums Chart in February 1970, peaking at
                            number 17. The album was awarded a Gold Disc by the
                            RIAA in February 1982. It was recorded at Trident
                            Studios and produced by Tony Visconti. The album
                            comprises nine songs, including the singles Space
                            Oddity and Memory of a Free Festival.
                        </p>
                    </Grid>
                    <Grid item xs={6}>
                        <h2 className="text-5xl font-bold text-white mb-10">
                            Bid History
                        </h2>
                        <LineChart />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default AuctionPage;
