function VideoPlayer() {
  return (
    <iframe
      className="lg:w-[560px] lg:h-[315px] w-[290px] h-[200px]"
      src="https://www.youtube.com/embed/C43MHajwQP4?start=07"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

export default VideoPlayer;
