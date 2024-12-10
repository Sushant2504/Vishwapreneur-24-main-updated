import React, { useEffect, useState } from "react";

const Gallery2 = () => {
  let newImages = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
  ];
  const [images, setImages] = useState(newImages);
  const [imageIndex, setImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
useEffect(() => {
  const intervalId = setInterval(() => {

    const newIndex = (imageIndex + 1) % images.length

    setImageIndex(newIndex);
  }, 5000);


  return () => clearInterval(intervalId);
}, [imageIndex, images]);
  useEffect(() => {
    const loadingTimeout = setTimeout(
      () => {
        setIsLoaded(true);
      },
      0
    );

    return () => clearTimeout(loadingTimeout);
  }, []);
 useEffect(() => {
   const intervalId = setInterval(() => {

     const index1 = Math.floor(Math.random() * images.length);
     let index2 = Math.floor(Math.random() * images.length);


     while (index2 === index1) {
       index2 = Math.floor(Math.random() * images.length);
     }

     const newArray = [...images];
     [newArray[index1], newArray[index2]] = [
       newArray[index2],
       newArray[index1],
     ];


     setImages(newArray);
   }, 5000); 
   return () => clearInterval(intervalId);
 }, [images]);
  const leftSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 35}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "750ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateX(0)" : "translateX(-100%)",
    };
  };

  const rightSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 50}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "750ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateX(0)" : "translateX(100%)",
    };
  };

  const downSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 80}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "650ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateY(0)" : "translateY(-100%)",
    };
  };

  const upSlide = (index) => {
    const transitionDelay = isLoaded ? `${index * 80}ms` : "0ms";
    return {
      transitionDelay,
      transitionDuration: "500ms",
      transitionTimingFunction: "ease-out",
      transform: isLoaded ? "translateY(0)" : "translateY(100%)",
    };
  };


  return (
    <div className="container1 w-full bg-black mx-auto px-5 py-2 sm:px-10 md:px-16 lg:px-32 lg:pt-10 lg:pb-32">
      {/* <motion.div className="container mx-auto px-5 py-2 sm:px-10 md:px-16 lg:px-32 lg:pt-24" ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}> */}
      <h1 className="main-heading pt-10  bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
        Gallery
      </h1>

      <div className="-m-1 flex flex-wrap">
        {/* Grid 1 of 3 images */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap">
            {/* Img 1 */}
            <div
              className="w-1/2 p-1 md:p-5  transform-op"
              style={downSlide(0)}
            >
              <img
                alt="gallery"
                className="  gap-12   border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-110 "
                src={images[3]}
              />
            </div>
            {/* img 2 */}
            <div className="w-1/2 p-1 md:p-5" style={downSlide(1)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center md:w-auto transition duration-300 transform hover:scale-110"
                src={images[0]}
              />
            </div>

            <div className="w-full p-1 md:p-5" style={leftSlide(2)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-105"
                src={images[1]}
              />
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap">

            <div className="w-full p-1 md:p-5" style={rightSlide(0)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-105"
                src={images[2]}
              />
            </div>
            <div className="w-1/2 p-1 md:p-5" style={upSlide(1)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center md:w-auto transition duration-300 transform hover:scale-110"
                src={images[3]}
              />
            </div>

            <div className="w-1/2 p-1 md:p-5 " style={upSlide(2)}>
              <img
                alt="gallery"
                className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-110"
                src={images[4]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;








// import React, { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";


// const Gallery2 = () => {
//   let newImages = [
//     "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
//     "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
//     "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp",
//     "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
//     "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
//     "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
//   ];
//   const [images, setImages] = useState(newImages);
//   const [imageIndex, setImageIndex] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//   const intervalId = setInterval(() => {

//     const newIndex = (imageIndex + 1) % images.length

//     setImageIndex(newIndex);
//   }, 5000)});

//   useEffect(() => {
//         const loadingTimeout = setTimeout(
//           () => {
//             setIsLoaded(true);
//           },
//           0
//         );
    
//         return () => clearTimeout(loadingTimeout);
//       }, []);
//      useEffect(() => {
//        const intervalId = setInterval(() => {
    
//          const index1 = Math.floor(Math.random() * images.length);
//          let index2 = Math.floor(Math.random() * images.length);
    
    
//          while (index2 === index1) {
//            index2 = Math.floor(Math.random() * images.length);
//          }
    
//          const newArray = [...images];
//          [newArray[index1], newArray[index2]] = [
//            newArray[index2],
//            newArray[index1],
//          ];
    
    
//          setImages(newArray);
//        }, 5000); 
//        return () => clearInterval(intervalId);
//      }, [images]);



//   // Use inView to detect if the component is in view
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Only trigger the animation once
//   });

//   // Create animation controls
//   const controls = useAnimation();

//   // Use useEffect to start the animation when inView changes
//   useEffect(() => {
//     if (inView) {
//       // Start the animation
//       controls.start({
//         opacity: 1,
//         x: 0,
//         y: 0,
//         transition: {
//           duration: 0.75,
//           ease: "easeOut",
//         },
//       });
//     }
//   }, [inView, controls]);

//   const leftSlide = (index) => {
//     const transitionDelay = isLoaded ? `${index * 35}ms` : "0ms";
//     return {
//       transitionDelay,
//       transitionDuration: "750ms",
//       transitionTimingFunction: "ease-out",
//       x: inView ? 0 : "-100%",
//       opacity: inView ? 1 : 0,
//     };
//   };

//   const rightSlide = (index) => {
//     const transitionDelay = isLoaded ? `${index * 50}ms` : "0ms";
//     return {
//       transitionDelay,
//       transitionDuration: "750ms",
//       transitionTimingFunction: "ease-out",
//       x: inView ? 0 : "100%",
//       opacity: inView ? 1 : 0,
//     };
//   };

//   const downSlide = (index) => {
//     const transitionDelay = isLoaded ? `${index * 80}ms` : "0ms";
//     return {
//       transitionDelay,
//       transitionDuration: "650ms",
//       transitionTimingFunction: "ease-out",
//       y: inView ? 0 : "-100%",
//       opacity: inView ? 1 : 0,
//     };
//   };

//   const upSlide = (index) => {
//     const transitionDelay = isLoaded ? `${index * 80}ms` : "0ms";
//     return {
//       transitionDelay,
//       transitionDuration: "500ms",
//       transitionTimingFunction: "ease-out",
//       y: inView ? 0 : "100%",
//       opacity: inView ? 1 : 0,
//     };
//   };

//   return (
//     <div className="container1 w-full bg-black mx-auto px-5 py-2 sm:px-10 md:px-16 lg:px-32 lg:pt-10 lg:pb-32">
//       <h1
//         className="main-heading pt-10  bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8"
//         ref={ref}
//       >
//         Gallery
//       </h1>

//       <motion.div
//         className="-m-1 flex flex-wrap"
//         initial={{ opacity: 0 }}
//         animate={controls}
//       >{/* Grid 1 of 3 images */}
// //         <div className="w-full md:w-1/2">
// //           <div className="flex flex-wrap">
// //             {/* Img 1 */}
// //             <div
//               className="w-1/2 p-1 md:p-5  transform-op"
//               style={downSlide(0)}
//             >
//               <img
//                 alt="gallery"
//                 className="  gap-12   border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-110 "
//                 src={images[3]}
//               />
//             </div>
//             {/* img 2 */}
//             <div className="w-1/2 p-1 md:p-5" style={downSlide(1)}>
//               <img
//                 alt="gallery"
//                 className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center md:w-auto transition duration-300 transform hover:scale-110"
//                 src={images[0]}
//               />
//             </div>

//             <div className="w-full p-1 md:p-5" style={leftSlide(2)}>
//               <img
//                 alt="gallery"
//                 className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-105"
//                 src={images[1]}
//               />
//             </div>
//           </div>
//         </div>


//         <div className="w-full md:w-1/2">
//           <div className="flex flex-wrap">

//             <div className="w-full p-1 md:p-5" style={rightSlide(0)}>
//               <img
//                 alt="gallery"
//                 className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-105"
//                 src={images[2]}
//               />
//             </div>
//             <div className="w-1/2 p-1 md:p-5" style={upSlide(1)}>
//               <img
//                 alt="gallery"
//                 className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center md:w-auto transition duration-300 transform hover:scale-110"
//                 src={images[3]}
//               />
//             </div>

//             <div className="w-1/2 p-1 md:p-5 " style={upSlide(2)}>
//               <img
//                 alt="gallery"
//                 className="border-red-50 border-r-2 border-t-2 block h-full w-full rounded-lg object-cover object-center transition duration-300 transform hover:scale-110"
//                 src={images[4]}
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//     );
//   };

//   export default Gallery2;