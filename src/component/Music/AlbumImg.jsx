import React from "react";

const AlbumImg = ({ albumImg, MusicData }) => {
  return (
    <>
      <div className="container mx-auto">
        {MusicData.map((data, index) => (
          <div key={index} className="m-4 p-4">
            <img
              src={albumImg}
              alt="album"
              className="w-full h-[300px] mx-auto rounded-2xl"
              key={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumImg;
