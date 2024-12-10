// import React from 'react';
// import { cn } from '../../utils/cn';

// interface GalleryColumnProps {
//   images: Array<{
//     url: string;
//     // title: string;
//   }>;
//   direction: 'up' | 'down';
// }

// export function GalleryColumn({ images, direction }: GalleryColumnProps) {
//   return (
//     <div className="relative flex-1 overflow-hidden h-[800px]">
//       <div
//         className={cn(
//           "flex flex-col gap-4 py-4",
//           direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'
//         )}
//       >
//         {/* Double the images to create seamless loop */}
//         {[...images, ...images].map((image, index) => (
//           <div
//             key={index}
//             className="relative h-80 group cursor-pointer overflow-hidden rounded-lg"
//           >
//             <img
//               src={image.url}
//               // alt={image.title}
//               className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//               {/* <h3 className="text-white text-xl font-bold p-6">{image.title}</h3> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// Ensure this path is correct for your setup


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GalleryColumnProps {
  images: Array<{
    url: string;
  }>;
  direction: 'up' | 'down';
}

export function GalleryColumn({ images, direction }: GalleryColumnProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      // GSAP scroll animation based on the direction prop
      gsap.fromTo(
        element,
        { y: direction === 'up' ? '0%' : '-50%' },
        { y: direction === 'up' ? '-50%' : '0%', repeat: -1, duration: 25, ease: 'linear' }
      );
    }
  }, [direction]);

  return (
    <div className="relative flex-1 overflow-hidden h-[800px]">
      <div
        ref={scrollRef}
        className="flex flex-col gap-4 py-4"
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative h-80 group cursor-pointer overflow-hidden rounded-lg"
          >
            <img
              src={image.url}
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}



