import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../pinata";
import Marketplace from "../contractJson/Marketplace.json";
import { useLocation } from "react-router";
import { ethers } from "ethers";
import axios from "axios";

function CreateForm() {
    const [formParams, updateFormParams] = useState({
        name: "",
        description: "",
        price: "",
    });
    const [musicURL, setMusicURL] = useState(null);
    const [coverURL, setCoverURL] = useState(null);
    const [message, updateMessage] = useState("");
    const location = useLocation();

    // async function disableButton() {
    //     const listButton = document.getElementById("list-button");
    //     listButton.disabled = true;
    //     listButton.style.backgroundColor = "grey";
    //     listButton.style.opacity = 0.3;
    // }

    // async function enableButton() {
    //     const listButton = document.getElementById("list-button");
    //     listButton.disabled = false;
    //     listButton.style.backgroundColor = "#A500FF";
    //     listButton.style.opacity = 1;
    // }

    //This function uploads the NFT image to IPFS
    async function uploadSong(e) {
        var file = e.target.files[0];
        //check for file extension
        try {
            //upload the file to IPFS
            // disableButton();
            updateMessage("Uploading image.. please dont click anything!");
            const response = await uploadFileToIPFS(file);
            if (response.success === true) {
                // enableButton();
                updateMessage("");
                console.log("Uploaded Music to Pinata: ", response.pinataURL);
                setMusicURL(response.pinataURL);
            }
        } catch (e) {
            console.log("Error during file upload", e);
        }
    }

    async function uploadCover(e) {
        var file = e.target.files[0];
        //check for file extension
        try {
            //upload the file to IPFS
            // disableButton();
            updateMessage("Uploading cover.. please dont click anything!");
            const response = await uploadFileToIPFS(file);
            if (response.success === true) {
                // enableButton();
                updateMessage("");
                console.log(
                    "Uploaded Cover Image to Pinata: ",
                    response.pinataURL
                );
                setCoverURL(response.pinataURL);
            }
        } catch (e) {
            console.log("Error during file upload", e);
        }
    }

    //This function uploads the metadata to IPFS
    async function uploadMetadataToIPFS() {
        const { songName, albumName, price } = formParams;

        // const songName = document.getElementById("exp_quan").value;
        //Make sure that none of the fields are empty
        if (!songName || !albumName || !price || !musicURL || !coverURL) {
            updateMessage("Please fill all the fields!");
            return -1;
        }

        const nftJSON = {
            songName,
            albumName,
            price,
            music: musicURL,
            cover: coverURL,
        };
        console.log(nftJSON);
        try {
            //upload the metadata JSON to IPFS
            const response = await uploadJSONToIPFS(nftJSON);
            if (response.success === true) {
                console.log("Uploaded JSON to Pinata: ", response);
                return response.pinataURL;
            }
        } catch (e) {
            console.log("error uploading JSON metadata:", e);
        }
    }

    async function listNFT(e) {
        e.preventDefault();
        // console.log("listing");
        //Upload data to IPFS
        try {
            const metadataURL = await uploadMetadataToIPFS();
            // console.log("1listing");
            console.log(metadataURL);
            if (metadataURL === -1) return;
            //After adding your Hardhat network to your metamask, this code will get providers and signers
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            // disableButton();
            updateMessage("Listing Music!");

            // console.log("2listing");
            //Pull the deployed contract instance
            let contract = new ethers.Contract(
                Marketplace.address,
                Marketplace.abi,
                signer
            );
            // console.log("3listing");
            //massage the params to be sent to the create NFT request
            const price = ethers.utils.parseUnits(formParams.price, "ether");
            let listingPrice = await contract.getListPrice();
            listingPrice = listingPrice.toString();

            // console.log(listingPrice);
            // console.log("4listing");
            //actually create the NFT
            let transaction = await contract.createToken(metadataURL, price, {
                value: listingPrice,
            });
            await transaction.wait();
            // console.log(transaction);
            // console.log("5listing");

            alert("Successfully listed your NFT!");
            // enableButton();
            updateMessage("");
            updateFormParams({ name: "", description: "", price: "" });
            // window.location.replace("/");
        } catch (e) {
            alert("Upload error" + e);
        }
        // console.log("listed");
    }

    return (
        <>
            <Navbar />

            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="rounded-lg">
                    <img src="./hero.png" />
                </div>
                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Upload Song
                    </h1>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="nft-name" className="text-gray-700">
                            Song Name
                        </label>
                        <input
                            id="nft-name"
                            type="text"
                            placeholder="Enter the name of your song"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            onChange={(e) =>
                                updateFormParams({
                                    ...formParams,
                                    songName: e.target.value,
                                })
                            }
                            value={formParams.songName}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="collection" className="text-gray-700">
                            Album
                        </label>
                        {/* Implementing a custom select dropdown with Tailwind CSS might require additional JavaScript for functionality which is not included here. */}
                        <input
                            id="nft-name"
                            type="text"
                            placeholder="Enter the name of your album"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            onChange={(e) =>
                                updateFormParams({
                                    ...formParams,
                                    albumName: e.target.value,
                                })
                            }
                            value={formParams.albumName}
                        />
                        {/* <option value="">Select</option>
                            {[1, 2, 3].map((key, index) => {
                                return (
                                    <option key={index} value={key}>
                                        Album {key}
                                    </option>
                                );
                            })}
                        </select> */}
                    </div>
                    <div className="grid grid-cols-2 gap-x-3">
                        <div className="space-y-2">
                            <label
                                htmlFor="image-upload"
                                className="text-gray-700 block"
                            >
                                Song Cover
                            </label>
                            <input
                                id="image-upload"
                                type="file"
                                accept=".png,.jpg,.jpeg"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                onChange={uploadCover}
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="song-upload"
                                className="text-gray-700 block"
                            >
                                Song MP3
                            </label>
                            <input
                                id="song-upload"
                                type="file"
                                accept=".mp3,.wav"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                onChange={uploadSong}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="price" className="text-gray-700">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            placeholder="Enter the price you want to list at"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            onChange={(e) =>
                                updateFormParams({
                                    ...formParams,
                                    price: e.target.value,
                                })
                            }
                            value={formParams.price}
                        />
                    </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 text-right">
                    <button
                        className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                        onClick={listNFT}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default CreateForm;
