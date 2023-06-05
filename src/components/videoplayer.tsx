import { useRef, useState, useEffect } from "react";
import { Backward, Forward, Pause, Play } from "../images";

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      const startingTime = 7;

      const updateTime = () => {
        setCurrentTime(videoElement.currentTime);
        setProgress((videoElement.currentTime / videoElement.duration) * 100);
      };

      const loadedMetadataHandler = () => {
        setVideoTime(videoElement.duration);
        videoElement.currentTime = startingTime;
        updateTime();
      };

      videoElement.addEventListener("timeupdate", updateTime);
      videoElement.addEventListener("loadedmetadata", loadedMetadataHandler);

      return () => {
        videoElement.removeEventListener("timeupdate", updateTime);
        videoElement.removeEventListener(
          "loadedmetadata",
          loadedMetadataHandler
        );
      };
    }
  }, []);

  const videoHandler = (control: "play" | "pause") => {
    if (videoRef.current) {
      if (control === "play") {
        videoRef.current.play();
        setPlaying(true);
      } else if (control === "pause") {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  const revert = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };
  const seek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = event.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const progressBarWidth = rect.width;
      const targetTime = (clickX / progressBarWidth) * videoTime;
      videoRef.current.currentTime = targetTime;
    }
  };

  return (
    <div className="lg:w-[40vw] lg:h-[40vh] h-fit w-[60vw] relative lg:rounded-[25px] rounded-[11px]">
      <video
        id="video"
        ref={videoRef}
        className="lg:w-fit lg:h-fit lg:rounded-[25px] rounded-[11px]"
        src="/laughs.mp4"
      ></video>

      <div className="bg-transparent mt-[-60%] z-30">
        <div className="flex justify-center pt-[30%]">
          <img
            onClick={revert}
            className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] lg:mx-[15%] mx-[9%] cursor-pointer"
            alt=""
            src={Backward}
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] lg:mx-[15%] mx-[9%] cursor-pointer"
              alt="Pause"
              src={Pause}
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px] lg:mx-[15%] mx-[9%] cursor-pointer"
              alt="Play"
              src={Play}
            />
          )}
          <img
            className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] lg:mx-[15%] mx-[9%] cursor-pointer"
            onClick={fastForward}
            alt="FastForward"
            src={Forward}
          />
        </div>
      </div>
      <div className="flex absolute lg:bottom-[-40px] bottom-[-50px] justify-center w-full">
        <p className="text-white mx-4">{formatTime(currentTime)}</p>
        <div
          className="bg-[#838282] rounded-[15px] w-[60vw] h-[5px] mt-2 cursor-pointer"
          onClick={seek}
        >
          <div
            style={{ width: `${progress}%` }}
            className="rounded-[15px] bg-indigo-600 h-[100%]"
          ></div>
        </div>
        <p className="text-white mx-4">{formatTime(videoTime)}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
