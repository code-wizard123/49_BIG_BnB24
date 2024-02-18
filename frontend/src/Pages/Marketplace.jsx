import Navbar from "../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import NFTCard from "../Components/NFTCard/NFTCard";
import "./Marketplace.css";
import { ethers } from "ethers";
import MarketplaceJSON from "../contractJson/Marketplace.json";
import { GetIpfsUrlFromPinata } from "../utils";
import axios from "axios";

const Marketplace = () => {
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
    console.log(1, transaction);

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i) => {
        var tokenURI = await contract.tokenURI(i.tokenId);
        console.log("getting this tokenUri", tokenURI);
        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        console.log("getting this ", tokenURI);
        let meta = await axios.get(tokenURI);
        meta = meta.data;

        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        };
        return item;
      })
    );
    // console.log(transaction);
    console.log(items);

    updateFetched(true);
    updateData(items);
  }

  if (!dataFetched) getAllNFTs();
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
              {data &&
                data.map((value, index) => (
                  <Grid item key={index} sx={{ padding: "0px" }}>
                    <NFTCard
                      id={value.tokenId}
                      price={value.price}
                      author={value.seller}
                      imgUrl={value.image}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
