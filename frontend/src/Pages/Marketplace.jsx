import Navbar from "../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid } from "@mui/material";
import NFTCard from "../Components/NFTCard/NFTCard";
import "./Marketplace.css";

const Marketplace = () => {
  return (
    <div>
      <Navbar />
      <div className="blurredFilter">
        <div className="beautiful-background">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="line-text">Marketplace</div>
            <Grid
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                columnGap: "5rem",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (index) => (
                  <Grid item key={index} sx={{ padding: "0px" }}>
                    <NFTCard id={index} />
                  </Grid>
                )
              )}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
