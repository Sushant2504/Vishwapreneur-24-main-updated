import React, { useState, useEffect } from "react";
const Gallery = () => {
  const initialImages = [
    "https://res.cloudinary.com/edcviitcom/image/upload/v1706247438/vp21/g2_xbem3z.webp",
    // "https://res.cloudinary.com/edcviitcom/image/upload/v1706247310/vp21/g4_obhq8o.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1706247310/vp21/g6_jvkfse.webp",
    // "https://res.cloudinary.com/edcviitcom/image/upload/v1706247310/vp21/g3_vhxbtf.webp",
    // "https://res.cloudinary.com/edcviitcom/image/upload/v1706247310/vp21/g1_omirdm.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1706247310/vp21/g5_lcewae.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_208_-min_npvlyk.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_207_-min_jrhpvo.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_210_-min_twulqj.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_209_-min_rr9dhk.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_212_-min_amwboh.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_211_-min_lpuzng.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046413/vp24/Screenshot_213_-min_lvjevr.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_214_-min_aqtqfn.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_215_-min_zg4gi5.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_216_-min_tvtauj.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_205_-min_bouyxz.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_206_-min_dekgvj.webp",
    "https://res.cloudinary.com/edcviitcom/image/upload/v1707046412/vp24/Screenshot_204_-min_kde4yt.webp",
  ];

  const getUniqueIndices = (length) => {
    const indices = [];
    while (indices.length < length) {
      const newIndex = Math.floor(Math.random() * initialImages.length);
      if (!indices.includes(newIndex)) {
        indices.push(newIndex);
      }
    }
    return indices;
  };

  const [visibleImageIndices, setVisibleImageIndices] = useState(
    getUniqueIndices(6)
  );
  const [opacity, setOpacity] = useState(Array(6).fill(1));

  useEffect(() => {
    const interval = setInterval(() => {
      const indexToReplace = Math.floor(Math.random() * 6);
      let newIndex;

      do {
        newIndex = Math.floor(Math.random() * initialImages.length);
      } while (visibleImageIndices.includes(newIndex));

      setOpacity((prevOpacity) => {
        const newOpacity = [...prevOpacity];
        newOpacity[indexToReplace] = 0;
        return newOpacity;
      });

      setTimeout(() => {
        setVisibleImageIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          newIndices[indexToReplace] = newIndex;
          return newIndices;
        });

        setOpacity((prevOpacity) => {
          const newOpacity = [...prevOpacity];
          newOpacity[indexToReplace] = 1;
          return newOpacity;
        });
      }, 1000); // Delayed to match the transition duration
    }, 2000);

    return () => clearInterval(interval);
  }, [initialImages, visibleImageIndices]);

  const visibleImages = visibleImageIndices.map(
    (index) => initialImages[index]
  );
  const galleryImageClassNames = [
    "",
    "",
    "col-span-2 row-span-2",
    "md:col-span-2 md:row-span-2",
    "",
    "col-span-2 row-span-2 md:col-span-1 md:row-span-1",
  ];
  return (
    <div name="gallery" id="gallery" className="bg-black pt-16">
      <div class="nine">
        <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center py-16">
          Gallery
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-[10rem] ">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className={` relative aspect-w-4 aspect-h-3   ${galleryImageClassNames[index]}
            `}
            style={{
              opacity: opacity[index],
              transition: "opacity 1s ease-in-out",
            }}
          >
            <img
              src={image}
              alt={`Nature ${index + 1}`}
              className="rounded-xl object-cover w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
