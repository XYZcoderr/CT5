import React from 'react';
import YouTube from 'react-youtube';

interface Props {
  videoId: string;
}

export const VideoSection: React.FC<Props> = ({ videoId }) => {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-primary-light/50 backdrop-blur-sm" />
      <YouTube
        videoId={videoId}
        className="absolute inset-0"
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            controls: 1,
            rel: 0,
            showinfo: 0,
          },
        }}
        onReady={(event) => {
          event.target.pauseVideo();
        }}
      />
    </div>
  );
};