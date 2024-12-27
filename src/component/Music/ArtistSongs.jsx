import React from "react";

const ArtistSongs = ({
  selectedArtist,
  setAlbumImg,
  setCurrentSong,
  MusicData,
}) => {
  return (
    <div>
      {selectedArtist && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Songs by {selectedArtist}:
          </h2>
          <div className="grid gap-6 ">
            {MusicData[0].hindiSongs.songs
              .filter((song) => song.artist === selectedArtist)
              .map((song, index) => (
                <div key={index}>
                  <div
                    key={index}
                    className=" p-4 rounded-2xl shadow-lg shadow-[#50107E]"
                  >
                    {/* hover:scale-90 hover:ease transition-all duration-300 */}
                    <h3 className="text-[#5022A7] text-[20px] md:text-2xl font-bold text-center mb-2">
                      {song.title}
                    </h3>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div>
                        <img
                          src={song.posterUrl}
                          onClick={() => {
                            setAlbumImg(song.posterUrl);
                            setCurrentSong(song.url);
                          }}
                          alt={song.title}
                          className="w-[200px] h-[100px] object-cover rounded-2xl "
                        />
                      </div>
                      <div>
                        <h4 className="flex items-center gap-8">
                          <span className="text-[18px] font-bold text-[#5022A7]">
                            Album :
                          </span>
                          <span>{song.album}</span>
                        </h4>
                        <h4 className="flex items-center gap-8">
                          <span className="text-[18px] font-bold text-[#5022A7]">
                            Duration :
                          </span>
                          <span>{song.duration}</span>
                        </h4>
                        <h4 className="flex items-center gap-8">
                          <span className="text-[18px] font-bold text-[#5022A7]">
                            Genre :
                          </span>
                          <span>{song.genre}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>

    //  <div>
    //   {selectedArtist && (
    //     <div className="mt-4">
    //       <h2 className="text-xl font-bold">Songs by {selectedArtist}:</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-6">
    //         {MusicData[0].hindiSongs.songs
    //           .filter((song) => song.artist === selectedArtist)
    //           .map((song, index) => (
    //             <div key={index}>
    //               <div
    //                 key={index}
    //                 className="flex flex-col items-center gap-4 p-4 rounded-2xl shadow-lg shadow-[#50107E] hover:scale-90 hover:ease-linear transition-all duration-300"
    //               >
    //                 <h3 className="text-[#5022A7] text-[20px] md:text-2xl font-bold">
    //                   {song.title}
    //                 </h3>
    //                 <div>
    //                   <img
    //                     src={song.posterUrl}
    //                     onClick={() => {
    //                       setAlbumImg(song.posterUrl);
    //                       setCurrentSong(song.url);
    //                     }}
    //                     alt={song.title}
    //                     className="w-[400px] h-[250px] rounded-2xl "
    //                   />
    //                 </div>
    //                 <div>
    //                   <h4 className="flex items-center gap-8">
    //                     <span className="text-[18px] font-bold text-[#5022A7]">
    //                       Album :
    //                     </span>
    //                     <span>{song.album}</span>
    //                   </h4>
    //                   <h4 className="flex items-center gap-8">
    //                     <span className="text-[18px] font-bold text-[#5022A7]">
    //                       Duration :
    //                     </span>
    //                     <span>{song.duration}</span>
    //                   </h4>
    //                   <h4 className="flex items-center gap-8">
    //                     <span className="text-[18px] font-bold text-[#5022A7]">
    //                       Genre :
    //                     </span>
    //                     <span>{song.genre}</span>
    //                   </h4>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default ArtistSongs;
