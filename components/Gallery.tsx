import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          >
            <PhotoView src={photo.src}>
              <img
                src={loaded[index] ? photo.src : photo.lowResSrc}
                alt={photo.alt}
                className={`w-full h-auto object-cover transition-opacity duration-500 ${
                  loaded[index] ? 'opacity-100' : 'opacity-0'
                }`}
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
