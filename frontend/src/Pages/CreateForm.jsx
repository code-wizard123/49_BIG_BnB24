import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../pinata";
// import Marketplace from "../Marketplace.json";
import { useLocation } from "react-router";

function CreateForm() {
    const [formParams, updateFormParams] = useState({
        name: "",
        description: "",
        price: "",
    });
    const [fileURL, setFileURL] = useState(null);
    const ethers = require("ethers");
    const [message, updateMessage] = useState("");
    const location = useLocation();

    //This function uploads the NFT image to IPFS
    async function OnChangeFile(e) {
        var file = e.target.files[0];
        //check for file extension
        try {
            //upload the file to IPFS
            const response = await uploadFileToIPFS(file);
            if (response.success === true) {
                updateMessage("");
                console.log("Uploaded image to Pinata: ", response.pinataURL);
                setFileURL(response.pinataURL);
            }
        } catch (e) {
            console.log("Error during file upload", e);
        }
    }

    async function uploadMetadataToIPFS() {
        const { name, description, price } = formParams;

        if (!name || !description || ~price || ~fileURL) return;

        const nftJSON = {
            name,
            description,
            price,
            image: fileURL,
        };

        try {
            const response = await uploadJSONToIPFS(nftJSON);
            if (response.success == true) {
                console.log("Uploaded JSON to Pinata:" + response);
                return response.pinataURL;
            }
        } catch (e) {
            console.log("Error uploading JSON metadata");
        }
    }

    async function listNFT(e) {
        e.preventDefault();

        try {
            const metadata = await uploadMetadataToIPFS();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            updateMessage("Please wait... uploading");

            let contract = new ethers.Contract(
                Marketplace.address,
                Marketplace.abi,
                signer
            );

            const price = ethers.utils.parseUnits(formParams.price, "ether");
            let listingPrice = await contract.getListPrice();
            listingPrice = listingPrice.toString();
            let transaction = await contract.createToken(metadataURL, price, {
                value: listingPrice,
            });
            await transaction.wait();

            alert("Successfully listed your Music!");
            updateMessage("");
            updateFormParams({ name: "", description: "", price: "" });
            window.location.replace("/");
        } catch (e) {
            alert("Error occured during uploading: " + e);
        }
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
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="collection" className="text-gray-700">
                            Album
                        </label>
                        {/* Implementing a custom select dropdown with Tailwind CSS might require additional JavaScript for functionality which is not included here. */}
                        <select
                            id="collection"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                        >
                            <option value="">Select</option>
                            {[1, 2, 3].map((key, index) => {
                                return (
                                    <option key={index} value={key}>
                                        Album {key}
                                    </option>
                                );
                            })}
                        </select>
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
                            placeholder="Enter the price of your Song"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                        />
                    </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 text-right">
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default CreateForm;
