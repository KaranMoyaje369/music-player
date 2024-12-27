import React from "react";
import { MusicData } from "../../data/data";

const Singer = () => {
  return (
    <>
      <div>
        {MusicData.map((singer, index) => {
          return (
            <div key={index}>
              {/* <h1>{singer.hindiSongs.arijitSinghSongs[0].artists[0]}</h1> */}
              <div className="">
                {singer.hindiSongs.arijitSinghSongs.map((song, index) => {
                  return (
                    <div key={index}>
                      <h2>{song.title}</h2>
                      <div>
                        <img
                          src={song.posterUrl}
                          alt={song.title}
                          className="height-[500px] w-[500px]"
                        />
                      </div>
                      <div>
                        <audio controls>
                          <source src={song.url} type="audio/mp3" />
                        </audio>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Singer;
