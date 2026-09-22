'use client';

import { useRef, useEffect, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string | string[];
  posterSrc?: string;
  overlayOpacity?: number;
}

const VideoBackground = ({
  videoSrc,
  posterSrc,
  overlayOpacity = 0.7,
}: VideoBackgroundProps) => {
  const videos = Array.isArray(videoSrc) ? videoSrc : [videoSrc];
  const [slotSources, setSlotSources] = useState([0, Math.min(1, videos.length - 1)]);
  const [activeSlot, setActiveSlot] = useState(0);
  const [transitionSlot, setTransitionSlot] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current[0]?.load();
  }, []);

  const playVideo = (slot: number) => {
    const playPromise = videoRefs.current[slot]?.play();
    playPromise?.catch((error) => {
      console.warn('Autoplay was prevented:', error);
    });
  };

  const handleVideoLoaded = (slot: number) => {
    playVideo(slot);

    if (transitionSlot === slot) {
      setActiveSlot(slot);
      setTransitionSlot(null);
    }
  };

  const playNextVideo = (slot: number) => {
    if (videos.length < 2 || transitionSlot !== null) return;

    const incomingSlot = slot === 0 ? 1 : 0;
    const nextSource = (slotSources[incomingSlot] + 1) % videos.length;

    setTransitionSlot(incomingSlot);
    setSlotSources((sources) => {
      const nextSources = [...sources];
      nextSources[incomingSlot] = nextSource;
      return nextSources;
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#f7f4ef]">
      {slotSources.map((sourceIndex, slot) => (
        <video
          key={slot}
          ref={(element) => {
            videoRefs.current[slot] = element;
          }}
          src={videos[sourceIndex]}
          autoPlay={slot === 0}
          muted
          playsInline
          preload="auto"
          poster={posterSrc}
          onEnded={() => playNextVideo(slot)}
          onLoadedData={() => handleVideoLoaded(slot)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            slot === activeSlot ? 'opacity-75' : 'opacity-0'
          }`}
        />
      ))}

      <div
        className="absolute inset-0 bg-[#0b192c]"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

export default VideoBackground;