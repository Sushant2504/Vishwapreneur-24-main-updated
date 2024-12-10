// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",
//     "https://i.ytimg.com/vi/trEammZ5654/maxresdefault.jpg",

//     // Add more images as needed
//   ];

//   const openImage = (index) => {
//     setSelectedImage(images[index]);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div id="Gallery">
//       <div className="bg-black pb-20">
//         <div className="container mx-auto text-center">
//           <h2 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
//             Gallery
//           </h2>

//           <Carousel
//             showThumbs={false}
//             autoPlay={true} // Enable auto play for images
//             infiniteLoop={true}
//             emulateTouch={true}
//             interval={1500} // Adjust the interval (in milliseconds) for slower movement
//             transitionTime={1500} // Transition time between slides
//             stopOnHover={false} // Allow continuous movement
//           >
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 onClick={() => openImage(index)}
//                 className="cursor-pointer"
//               >
//                 <img src={image} alt={`Image ${index + 1}`} />
//               </div>
//             ))}
//           </Carousel>

//           {selectedImage && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//               <div className="max-w-3xl w-full p-4 relative">
//                 <img src={selectedImage} alt="Selected Image" />
//                 <button
//                   onClick={closeImage}
//                   className="absolute top-4 right-4 text-white font-bold text-xl cursor-pointer"
//                 >
//                   X
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React from 'react';
import { GalleryColumn } from './GalleryColumn';
import './Gallery.css'

const column1Images = [
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1706247310/vp21/g5_lcewae.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_208_-min_npvlyk.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_207_-min_jrhpvo.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_215_-min_zg4gi5.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_206_-min_dekgvj.webp",
  },
];

const column2Images = [
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_210_-min_twulqj.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_209_-min_rr9dhk.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_212_-min_amwboh.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_216_-min_tvtauj.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_204_-min_kde4yt.webp",
  },
];
const column3Images = [
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_211_-min_lpuzng.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_213_-min_lvjevr.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_214_-min_aqtqfn.webp",
  },
  {
    url: "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_205_-min_bouyxz.webp",
  },
  
]
export function Gallery() {
  return (<>
    <div>
      <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-5xl font-bold text-center py-16">Gallery</h1>
    </div>
    <section className="w-full bg-black min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="flex gap-4">
          <GalleryColumn images={column1Images} direction="up" />
          <GalleryColumn images={column2Images} direction="down" />
          <GalleryColumn images={column3Images} direction='up' />
        </div>
      </div>
    </section>
  </>
  );
}

export default Gallery;

