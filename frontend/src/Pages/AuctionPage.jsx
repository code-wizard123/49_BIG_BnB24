import Navbar from "../Components/Navbar/Navbar";

function AuctionPage() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="container grid gap-6 px-4 py-6 md:grid-cols-2 md:py-12 lg:gap-12 lg:px-6 xl:gap-16">
          <div className="flex flex-col gap-4 md:order-2">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold text-white">Space Oddity</h1>
              <p className="text-sm text-gray-300">By David Bowie</p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold text-white">$1,000,000</h2>
              <p className="text-sm text-gray-300">Current Bid</p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold text-white">$5,000,000</h2>
              <p className="text-sm text-gray-300">Buy Now Price</p>
            </div>
            <form className="grid gap-2">
              <div className="flex items-center space-x-2">
                <label className="text-base text-white" htmlFor="bid-amount">
                  Your Bid
                </label>
                <input
                  id="bid-amount"
                  placeholder="Enter bid amount"
                  className="bg-gray-700 text-white"
                />
              </div>
              <button type="submit" className="text-white bg-blue-600">
                Place Bid
              </button>
              <button className="text-white border-white">
                Login with Google
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="NFT Artwork"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center border border-gray-700 w-full shadow-sm"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container grid gap-6 px-4 py-6 md:grid-cols-2 md:py-12 lg:gap-12 lg:px-6 xl:gap-16">
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {/* <Avatar className="w-8 h-8" /> */}
                  <div className="grid gap-1">
                    <p className="text-sm font-medium text-white">johndoe</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <p className="text-sm font-medium text-white">$500,000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {/* <Avatar className="w-8 h-8" /> */}
                  <div className="grid gap-1">
                    <p className="text-sm font-medium text-white">janedoe</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <p className="text-sm font-medium text-white">$300,000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {/* <Avatar className="w-8 h-8" /> */}
                  <div className="grid gap-1">
                    <p className="text-sm font-medium text-white">cooluser</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <p className="text-sm font-medium text-white">$100,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container grid gap-6 px-4 py-6 md:grid-cols-2 md:py-12 lg:gap-12 lg:px-6 xl:gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-white">Related NFTs</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Repeat the related NFTs with adjusted styling for dark theme */}
              {/* Example for one item */}
              <div className="flex flex-col gap-2">
                <img
                  alt="NFT Artwork"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center border border-gray-700"
                  height="133"
                  src="/placeholder.svg"
                  width="200"
                />
                <div className="grid gap-1">
                  <h3 className="text-sm font-bold text-white">Space Oddity</h3>
                  <p className="text-xs text-gray-300">By David Bowie</p>
                </div>
              </div>
              {/* Repeat for other related NFTs as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionPage;
