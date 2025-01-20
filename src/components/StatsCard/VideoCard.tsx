import React from 'react';
import YouTube from 'react-youtube';

export const VideoCard = () => {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
      <YouTube
        videoId="dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        className="absolute inset-0"
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            controls: 1,
          },
        }}
      />
    </div>
  );
};