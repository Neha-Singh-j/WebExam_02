import React, { useEffect, useState } from "react";
import Apicalling from "./ApiCalling";
import MemeCard from "./MemeCard";

function Body() {
  const allMemes = Apicalling();
  const [memesData, setMemesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (allMemes && allMemes.length) {
      setMemesData(allMemes);
    }
  }, [allMemes]);

  function handleSearch() {
    const filtered = allMemes.filter((meme) =>
      meme.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMemesData(filtered);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight">
        Meme Explorer 😎
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search memes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-2/4 max-w-xl px-5 py-3 rounded-l-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-full transition text-lg font-medium shadow-md"
        >
          🔍
        </button>
      </div>

      {/* Meme cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {memesData.length > 0 ? (
          memesData.map((meme, index) => <MemeCard key={index} meme={meme} />)
        ) : (
          <p className="text-center text-gray-500 text-xl mt-16 col-span-full">
            No memes found 😢
          </p>
        )}
      </div>
    </div>
  );
}

export default Body;
