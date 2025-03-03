'use client';

import { useEffect, useState } from 'react';
import TikTokVideo from './TikTokVideo';

// Create base video array
const baseVideo = {
  videoUrl: "/assets/LadyVid.mp4",
  username: "@skinregenesis",
  description: "Experience luxury waxing services at SKIN Regenesis ✨",
  hashtags: ["waxing", "beauty", "skincare"],
};

// Duplicate videos to create a longer array for smooth infinite scroll
const videos = [...Array(8)].map((_, index) => ({
  ...baseVideo,
  id: index, // Add unique id for key prop
}));

export default function VideoCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = document.getElementById('video-scroll-container');
    if (!scrollContainer) return;

    // Clone first few items and append to end for smooth infinite scroll
    const scrollWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    
    const animate = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        if (newPosition >= scrollWidth - containerWidth) {
          return 0;
        }
        return newPosition;
      });
    };

    const intervalId = setInterval(animate, 50); // Adjust speed by changing interval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative max-w-[90rem] mx-auto py-16 overflow-hidden">
      <h2 className="text-3xl font-medium text-center mb-12">Latest Videos</h2>
      
      <div className="relative">
        <div 
          id="video-scroll-container"
          className="flex gap-4 animate-scroll"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: 'transform 0.5s linear',
          }}
        >
          {/* First set of videos */}
          {videos.map((video, index) => (
            <div
              key={`video-${index}`}
              className="flex-none w-[280px] transition-all duration-300 hover:scale-105"
            >
              <TikTokVideo 
                {...video}
                username={`@skinregenesis_${index + 1}`}
              />
            </div>
          ))}
          
          {/* Duplicate set for smooth infinite scroll */}
          {videos.map((video, index) => (
            <div
              key={`video-duplicate-${index}`}
              className="flex-none w-[280px] transition-all duration-300 hover:scale-105"
            >
              <TikTokVideo 
                {...video}
                username={`@skinregenesis_${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 