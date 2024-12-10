// import React from 'react';
// import './Gallery.css'; // Import your CSS file for Gallery
// import eventImage1 from '../../../assets/event.jpg'; // Import your event images
// import eventImage2 from '../../../assets/event.jpg'; // Import other event images similarly

// const Gallery = () => {
//   return (
//     <div className="sponsors-section">
//        <div className="gallery-section">
//       <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">Event Gallery</h1>

//       <div className="image-grid">
//         <div className="gallery-item">
//           <img src={eventImage1} alt="Event 1" className="gallery-image" />
//         </div>
//         <div className="gallery-item">
//           <img src={eventImage2} alt="Event 2" className="gallery-image" />
//         </div>
//         {/* Add more images using imported variables similarly */}
//         <div className="gallery-item">
//           <img src={eventImage2} alt="Event 2" className="gallery-image" />
//         </div>

//         <div className="gallery-item">
//           <img src={eventImage2} alt="Event 2" className="gallery-image" />
//         </div>

//       </div>
//     </div>
//     </div>
   
//   );
// };

// export default Gallery;







// import React, { useState } from 'react';
// // import './Gallery.css';

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg', // Replace with your image URLs
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg', // Replace with your image URLs
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
//     'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg'
//     // Add more images as needed
//   ];

//   const openImage = (index) => {
//     setSelectedImage(images[index]);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="bg-black pb-20">
//       <div className="container mx-auto text-center">
//         <h2 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">Gallery</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="relative cursor-pointer overflow-hidden transform hover:scale-105 transition-transform"
//               onClick={() => openImage(index)}
//             >
//               <img
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {selectedImage && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//             <div className="max-w-3xl w-full p-4 relative">
//               <img
//                 src={selectedImage}
//                 alt="Selected Image"
//                 className="w-full h-full object-cover"
//               />
//               <button
//                 onClick={closeImage}
//                 className="absolute top-4 right-4 text-white font-bold text-xl cursor-pointer"
//               >
//                 X
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',
    'https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg',

    // Add more images as needed
  ];

  const openImage = (index) => {
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id="Gallery">
      <div className="bg-black pb-20">
      <div className="container mx-auto text-center">
        <h2 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
          Gallery
        </h2>

        <Carousel
          showThumbs={false}
          autoPlay={true} // Enable auto play for images
          infiniteLoop={true}
          emulateTouch={true}
          interval={1500} // Adjust the interval (in milliseconds) for slower movement
          transitionTime={1500} // Transition time between slides
          stopOnHover={false} // Allow continuous movement
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openImage(index)}
              className="cursor-pointer"
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        


        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="max-w-3xl w-full p-4 relative">
              <img src={selectedImage} alt="Selected Image" />
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white font-bold text-xl cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    
    
  );
};

export default Gallery;
