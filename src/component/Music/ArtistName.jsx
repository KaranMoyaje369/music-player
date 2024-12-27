import React, { useState } from "react";
import ArtistSongs from "./ArtistSongs";

const ArtistName = ({ setAlbumImg, setCurrentSong, MusicData }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap gap-4 mt-4">
        {MusicData[0].hindiSongs.artistName.map((artist, index) => (
          <div key={index}>
            <button
              onClick={() => handleArtistClick(artist)}
              className="bg-[#5022A7] text-white px-4 py-2 font-bold rounded-full text-[16px] lg:text-[20px]"
            >
              {artist}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 mb-20">
        <ArtistSongs
          selectedArtist={selectedArtist}
          setAlbumImg={setAlbumImg}
          setCurrentSong={setCurrentSong}
          MusicData={MusicData}
        />
      </div>
    </div>
  );
};

export default ArtistName;
