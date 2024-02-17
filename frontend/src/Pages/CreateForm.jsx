import Navbar from "../Components/Navbar/Navbar";

function CreateForm() {
  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="rounded-lg">
          <img src="./hero.png" />
        </div>
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">Upload Song</h1>
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
              <label htmlFor="image-upload" className="text-gray-700 block">
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
              <label htmlFor="song-upload" className="text-gray-700 block">
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
