import React from 'react';

interface ThumbnailProps {
  thumbnailUrl: string;
  duration: string;
  onHover: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnailUrl, duration, onHover, onMouseLeave, isHovered }) => {
  return (
    <div onMouseEnter={onHover} onMouseLeave={onMouseLeave} style={{ position: 'relative', width: '300px', height: '168px' }}>
      <img src={thumbnailUrl} alt="video thumbnail" style={{ width: '100%', height: '100%' }} />
      <span style={{ position: 'absolute', bottom: '5px', right: '5px', backgroundColor: 'black', color: 'white', padding: '2px 4px', borderRadius: '4px' }}>
        {duration}
      </span>
    </div>
  );
};

export default Thumbnail;