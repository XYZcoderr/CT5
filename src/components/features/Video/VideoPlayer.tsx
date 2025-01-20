import React, { useState } from 'react';
import { Play } from 'lucide-react';
import YouTube from 'react-youtube';

interface VideoPlayerProps {
  videoId: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`video-container ${className}`}>
      {!isPlaying && (
        <div className="video-play-button">
          <button
            onClick={() => setIsPlaying(true)}
            className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-blue-900 ml-1" />
          </button>
        </div>
      )}
      
      {isPlaying && (
        <YouTube
          videoId={videoId}
          className="absolute inset-0"
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              controls: 1,
              rel: 0,
            },
          }}
          onReady={(event) => {
            // Add title for accessibility
            event.target.getIframe().title = 'YouTube video player';
          }}
        />
      )}
    </div>
  );
};