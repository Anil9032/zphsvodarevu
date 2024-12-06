import React from 'react';

const GALLERY_IMAGES = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
    caption: 'Annual Day Celebration'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    caption: 'Science Exhibition'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    caption: 'Library'
  },
  // Add more images as needed
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">School Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-800 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}