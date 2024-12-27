import React from "react";
import { useState } from "react";
import { MusicData } from "../../data/data";
import { FaHeart } from "react-icons/fa6";
import ThemeChanger from "./ThemeChanger";
import AlbumImg from "../Music/AlbumImg";
import MusicPlayer from "../Music/MusicPlayer";
import ArtistName from "../Music/ArtistName";

const Header = () => {
  const [albumImg, setAlbumImg] = useState(
    MusicData[0].hindiSongs.songs[0].posterUrl
  );

  const [currentSong, setCurrentSong] = useState(
    MusicData[0].hindiSongs.songs[0].url
  );

  const [ispLaiyng, setIsPlaying] = useState(false);

  return (
    <>
      /* Header Navbar Start */
      <div className="fixed top-0 left-0 right-0 shadow-md headerBg">
        <div className="container mx-auto flex justify-between items-center text-center py-4 tracking-wider mb-5 mt-5">
          <div className="px-2 py-[4px]">
            <span className="text-2xl md:text-4xl font-bold text-[#5022A7]">
              Musico
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaHeart className="text-[25px] md:text-[30px] text-[#f00]" />
            <ThemeChanger />
            <button className="bg-[#5022A7] text-white px-4 py-2 font-bold rounded-full text-[16px] lg:text-[20px]">
              Play Music
            </button>
          </div>
        </div>
      </div>
      /* Header Navbar End */
      <div className="container mx-auto mt-40  mb-50 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 p-6">
        {/* Album Image Component */}
        <div className=" shadow-lg shadow-[#50107E]">
          <AlbumImg albumImg={albumImg} MusicData={MusicData} />
        </div>

        {/* Artist Name Component */}
        <div className="p-6  shadow-lg shadow-[#50107E]">
          <ArtistName
            setAlbumImg={setAlbumImg}
            setCurrentSong={setCurrentSong}
            MusicData={MusicData}
          />
        </div>
      </div>
      {/* Music Player Component */}
      <div className="fixed bottom-0 left-0 right-0 ">
        <MusicPlayer
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          ispLaiyng={ispLaiyng}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
};

export default Header;
