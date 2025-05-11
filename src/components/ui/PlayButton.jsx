import { useState } from "react";

export default function PlayVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = "/assets/official-trailer.mp4";

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); // give time for rendering before playing
  };

  return (
    <div>
      {!isPlaying ? (
        <button
          onClick={handlePlay}
          className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ease-in-out text-lg font-semibold"
        >
          ▶ Play Video
        </button>
      ) : (
        <video
          ref={videoRef}
          controls
          className="w-full max-w-3xl rounded-xl shadow-2xl"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
