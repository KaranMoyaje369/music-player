import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = ({
  currentSong,
  setCurrentSong,
  ispLaiyng,
  setIsPlaying,
}) => {
  return (
    <AudioPlayer
      className="headerBg"
      autoPlay={ispLaiyng}
      src={currentSong}
      onPlay={(e) => setIsPlaying(true)}
      onPause={(e) => setIsPlaying(false)}
      // other props here
    />
  );
};

export default MusicPlayer;
