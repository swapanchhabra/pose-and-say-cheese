import React from 'react';
import Gallery from '../../components/Gallery';

const Wedding: React.FC = () => {
  const baseURL = '/assets/wedding/';
  const lowResBaseURL = '/assets/wedding/low-res/';

  const weddingPhotos = Array.from({ length: 3 }, (_, i) => ({
    src: `${baseURL}wedding${i + 1}.jpg`,
    lowResSrc: `${lowResBaseURL}wedding${i + 1}.jpg`,
    alt: `Wedding Photo ${i + 1}`,
  }));

  return (
    <div>
      <h1>Wedding Photography</h1>
      <p>Capture your special day with stunning photographs.</p>
      <Gallery photos={weddingPhotos} />
    </div>
  );
};

export default Wedding;
