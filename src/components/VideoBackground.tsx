'use client';

import { useRef, useEffect, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  overlayOpacity?: number;
}

const VideoBackground = ({
  videoSrc,
  posterSrc,
  overlayOpacity = 0.7,
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-950">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={posterSrc}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-40' : 'opacity-0'
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/60 to-gray-950"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

export default VideoBackground;