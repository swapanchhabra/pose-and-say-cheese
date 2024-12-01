import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Gallery.css';

interface Photo {
  src: string;
  lowResSrc?: string;
  alt: string;
}

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [loaded, setLoaded] = useState<boolean[]>(Array(photos.length).fill(false));

  const handleImageLoad = (index: number) => {
    const updatedLoaded = [...loaded];
    updatedLoaded[index] = true;
    setLoaded(updatedLoaded);
  };

  return (
    <PhotoProvider>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <PhotoView src={photo.src}>
              <img
                src={loaded[index] ? photo.src : photo.lowResSrc}
                alt={photo.alt}
                className={`gallery-photo ${loaded[index] ? 'visible' : ''}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
            </PhotoView>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
