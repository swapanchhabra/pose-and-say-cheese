import React from 'react';
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
  return (
    <PhotoProvider>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <PhotoView src={photo.src}>
              <img
                src={photo.lowResSrc || photo.src}
                alt={photo.alt}
                className="gallery-photo"
                loading="lazy"
              />
            </PhotoView>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
