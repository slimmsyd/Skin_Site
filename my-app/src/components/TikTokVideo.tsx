import React from 'react';

interface TikTokVideoProps {
  videoUrl: string;
  posterUrl?: string;
  username: string;
  description: string;
  hashtags: string[];
  likes?: string;
  comments?: string;
}

export default function TikTokVideo({
  videoUrl,
  posterUrl,
  username,
  description,
  hashtags,
  likes = "45.2K",
  comments = "1.2K"
}: TikTokVideoProps) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[400px] mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#FF69B4]/20 to-[#FF1493]/20 rounded-[3rem] blur-xl animate-pulse" />
      
      <div className="relative z-20 rounded-[2rem] overflow-hidden border border-[#FF69B4]/10 shadow-xl bg-black">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster={posterUrl}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            {username}
            <span className="bg-[#FF69B4] text-white text-xs px-2 py-0.5 rounded-full">Follow</span>
          </h3>
          <p className="text-sm text-white/90 mb-4">{description}</p>
          <div className="flex items-center gap-2 text-sm text-white/80">
            {hashtags.map((tag, index) => (
              <span key={index}>#{tag}</span>
            ))}
          </div>
        </div>

        <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
          <button className="group">
            <div className="w-12 h-12 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-1 group-hover:bg-[#FF69B4]/20 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <span className="text-white text-xs">{likes}</span>
          </button>

          <button className="group">
            <div className="w-12 h-12 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-1 group-hover:bg-[#FF69B4]/20 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10zm-2 0V5H5v14h10v-2a2 2 0 0 1 2-2h2z" />
              </svg>
            </div>
            <span className="text-white text-xs">{comments}</span>
          </button>
        </div>

        <div className="absolute top-4 right-4 animate-spin-slow">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      </div>
    </div>
  );
} 