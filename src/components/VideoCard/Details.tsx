import React from 'react';

interface DetailsProps {
  title: string;
  channelName: string;
  channelAvatarUrl: string;
  views: string;
  timestamp: string;
  isVerified: boolean;
}

const Details: React.FC<DetailsProps> = ({ title, channelName, channelAvatarUrl, views, timestamp, isVerified }) => {
  return (
    <div style={{ padding: '12px' }}>
      <div style={{ display: 'flex' }}>
        <img src={channelAvatarUrl} alt="channel avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', marginRight: '12px' }} />
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '500', color: 'black' }}>{title}</h3>
          <p style={{ fontSize: '14px', color: 'gray' }}>{channelName} {isVerified && '✔'}</p>
          <p style={{ fontSize: '14px', color: 'gray' }}>{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;