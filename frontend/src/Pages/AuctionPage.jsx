import { LineChart } from "../Components/Charts/LineChart";
import Navbar from "../Components/Navbar/Navbar";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import "./Marketplace.css";
import AuctionPageCard from "../Components/AuctionPageCard/AuctionPageCard";
import { useEffect } from "react";

function AuctionPage() {
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

  return (
    <>
      <Navbar />
      <Box className="blurredFilter mt-28">
        <Box className="beautiful-background">
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              className="flex justify-center items-center"
            >
              <pre contentEditable className="language-css" tabIndex="0">
                <img className="nft-img" src="../../public/hero.png" />
              </pre>
            </Grid>
            <Grid item>
              <Typography variant="h2" className="text-white">
                Space Oddity
              </Typography>
              <p>
                <span className="text-white">Creator: </span>
                <span className="text-gray-300">David Bowie</span>
              </p>
              <div className="flex gap-10 my-10">
                <AuctionPageCard text="Buy Now" money="50" />
                <AuctionPageCard text="Auction" money="99" />
              </div>
              <div className="flex gap-10">
                <TextField variant="outlined" className="w-1/2 bg-white rounded-md" />
                <Button variant="contained" className="w-1/2" startIcon={<GavelIcon />}>
                  Place a Bid
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Grid container sx={{
          padding: "10vw",
          gap: "10vw"
        }}>
          <Grid item xs={4} >
            <h2 className="text-5xl font-bold text-white">Description</h2>
            <p className="text-lg text-gray-300 mt-10">
              Space Oddity is the second studio album by English musician David
              Bowie. It was released by Philips Records on 14 November 1969 and
              made its debut in the UK Albums Chart in February 1970, peaking at
              number 17. The album was awarded a Gold Disc by the RIAA in
              February 1982. It was recorded at Trident Studios and produced by
              Tony Visconti. The album comprises nine songs, including the
              singles Space Oddity and Memory of a Free Festival.
            </p>
          </Grid>
          <Grid xs={6}>
            <h2 className="text-5xl font-bold text-white mb-10">Bid History</h2>
            <LineChart/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AuctionPage;
