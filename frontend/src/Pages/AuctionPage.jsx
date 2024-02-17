import { LineChart } from "../Components/Charts/LineChart";
import Navbar from "../Components/Navbar/Navbar";
import { TextField, Button } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import './Marketplace.css'
import AuctionPageCard from "../Components/AuctionPageCard/AuctionPageCard";

function AuctionPage() {

  return (
    <>
      <Navbar />
      <div className="w-full blurredFilter">
        <div className="container grid gap-6 px-4 py-6 md:grid-cols-2 md:py-12 lg:gap-12 lg:px-6 xl:gap-16 beautiful-background">
          <div className="flex flex-col gap-4 md:order-2 pt-20">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold text-white">Space Oddity</h1>
              <p className="text-sm text-gray-300">By David Bowie</p>
            </div>
            <div className="flex justify-center">
              {/* <div className="grid gap-1">
              <h2 className="text-2xl font-bold text-white">$1,000,000</h2>
              <p className="text-sm text-gray-300">Current Bid</p>
            </div> */}
              <AuctionPageCard text={'Buy Now'} money={3000} />
              {/* <div className="grid gap-1">
              <h2 className="text-2xl font-bold text-white">$5,000,000</h2>
              <p className="text-sm text-gray-300">Buy Now Price</p>
            </div> */}
              <div className="pr-9 pl-9 ">
                <AuctionPageCard text={'Last Bid'} money={1000} />
              </div>
            </div>
            <form className="grid gap-2">
              <div className="flex justify-center space-x-2 pt-4 pr-8 pb-7 text-white">
                <TextField color="primary" className="border-0 text-white bg-white rounded-xl" placeholder="Bid Amount" />
              </div>
              <div className="flex justify-center pr-10">
                <Button variant="contained" style={{ maxWidth: "12vw" }} disableElevation>
                  Place Bid
                  <GavelIcon />
                </Button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="NFT Artwork"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center border border-gray-700 w-full shadow-sm"
              height="400"
              src="/hero.png"
              width="600"
              style={{ objectFit: "cover", objectPosition: "bottom" }}
            />
          </div>
        </div>
        <div className="container grid gap-6 px-4 py-6 md:grid-cols-2 md:py-12 lg:gap-12 lg:px-6 xl:gap-16 beautifulBackground">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-white">Description</h2>
            <p className="text-sm text-gray-300 leading-7/relaxed">
              Space Oddity is the second studio album by English musician David
              Bowie. It was released by Philips Records on 14 November 1969 and
              made its debut in the UK Albums Chart in February 1970, peaking at
              number 17. The album was awarded a Gold Disc by the RIAA in
              February 1982. It was recorded at Trident Studios and produced by
              Tony Visconti. The album comprises nine songs, including the
              singles Space Oddity and Memory of a Free Festival.
            </p>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold text-white">Bid History</h2>
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionPage;
