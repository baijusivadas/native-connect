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
  const [staticMode, setStaticMode] = useState(false);
  const [activeSlot, setActiveSlot] = useState(0);
  const [transitionSlot, setTransitionSlot] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)');
    const update = () => setStaticMode(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!staticMode) videoRefs.current[0]?.load();
  }, [staticMode]);

  const playVideo = (slot: number) => {
    const playPromise = videoRefs.current[slot]?.play();
    playPromise?.catch((error) => {
      console.warn('Autoplay was prevented:', error);
    });
  };

  const handleVideoLoaded = (slot: number) => {
    if (slot === activeSlot || slot === transitionSlot) {
      playVideo(slot);
    }

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

  if (staticMode) {
    return (
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-[#f7f4ef]"
        style={posterSrc ? { backgroundImage: `url(${posterSrc})` } : undefined}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#0b192c]" style={{ opacity: overlayOpacity }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#f7f4ef]">
      {(videos.length === 1 ? [0] : slotSources).map((sourceIndex, slot) => (
        <video
          key={slot}
          ref={(element) => {
            videoRefs.current[slot] = element;
          }}
          src={videos[sourceIndex]}
          autoPlay={slot === activeSlot}
          loop={videos.length === 1}
          muted
          playsInline
          preload={slot === activeSlot ? 'auto' : 'metadata'}
          poster={posterSrc}
          onEnded={() => playNextVideo(slot)}
          onLoadedData={() => handleVideoLoaded(slot)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            slot === activeSlot ? 'opacity-100' : 'opacity-0'
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