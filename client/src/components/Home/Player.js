import { useState, useEffect } from "react";
//import song from './Suncrown - Legend of the Forgotten Centuries.mp3'
// import song from './viva.mp3'
import Slider from "./audioplayercomponents/slider/Slider";
import ControlPanel from "./audioplayercomponents/controls/ControlPanel";
import "./player.css";

function Player({
  chn,
  setchn,
  collection,
  current_song,
  setCurrent_song,
  audioRef,
  isPlaying,
  setIsPlaying,
}) {
  const volstyle = {
    // height:'10px',
    width: "50%",
    // boxShadow: 'none',
    // appearance: 'none',
    // height: '3px',
    // background: 'rgb(116, 52, 235)'
  };

  const [collectionlocal, setcollectionlocal] = useState(collection);
  const [percentage, setPercentage] = useState("0");
  const [volume, setvolume] = useState("1");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [song, setSong] = useState(collectionlocal[current_song]);

  useEffect(() => {
    setcollectionlocal(collection);
    prevsong();
    nextsong();
  }, [collection]);

  return (
    <div className="container-fluid player p-0">
      <div className="row">
        <div className="app-container col-sm-10">
          <Slider percentage={percentage} onChange={onChange} />
          <audio
            ref={audioRef}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e) => {
              setDuration(e.currentTarget.duration.toFixed(2));
            }}
            onEnded={nextsong}
            src={song.song}
          ></audio>
          <ControlPanel
            play={play}
            isPlaying={isPlaying}
            duration={duration}
            currentTime={currentTime}
            prevsong={prevsong}
            nextsong={nextsong}
          />
        </div>
        <div className="col-sm-2 vol">
          <input
            type="range"
            style={volstyle}
            className="volstyle"
            onChange={onChangevol}
            value={volume}
            step="0.1"
            min="0.0"
            max="1"
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
