// import React, { useEffect, useState } from 'react';
// import {motion} from 'framer-motion'
// import './media2.css'
// const Media2 = () => {
//   const [popupContent, setPopupContent] = useState('');
//   const [popupStyle, setPopupStyle] = useState({ display: 'none' });

//   useEffect(() => {
//     const counters = document.querySelectorAll('.counter');

//     counters.forEach((counter) => {
//       counter.innerText = '0';

//       const updateCounter = () => {
//         const target = +counter.getAttribute('data-target');
//         const c = +counter.innerText;

//         const increment = target / 500;

//         if (c < target) {
//           counter.innerText = `${Math.ceil(c + increment)}`;
//           setTimeout(updateCounter, 1);
//         } else {
//           counter.innerText = `${target}K+`;
//         }
//       };

//       updateCounter();
//     });
//   }, []);

//   const handleMouseOver = (event) => {
//     const postLink = event.target.getAttribute('data-post-link');

//     if (postLink) {
//       const iframeCode = getIframeCode(postLink);

//       // Display and position the popup in the center
//       const centerStyle = centerPopup({ width: 500, height: 400 });
//       setPopupStyle({ display: 'block', ...centerStyle });

//       // Set the iframe HTML content in the popup container
//       setPopupContent(iframeCode);
//     }
//   };

//   const handleMouseOut = () => {
//     // Do not hide the popup on mouse out
//     // The popup will be hidden when moving to another icon
//   };

//   const getIframeCode = (link) => {
//     // Check if the link is a YouTube video
//     if (link.includes('youtube.com')) {
//       // Add the autoplay parameter for YouTube videos
//       link += '&autoplay=1';
//     }

//     // Return the iframe code with allow attribute for autoplay
//     return `<iframe src="${link}" width="500" height="300" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>`;
//   };

//   const centerPopup = (size) => {
//     // Center the popup in the middle of the display
//     const offsetX = (window.innerWidth - size.width) / 2;
//     const offsetY = (window.innerHeight - size.height) / 2;

//     return { left: `${offsetX}px`, top: `${offsetY}px` };
//   };

//   const socialIcons = [
//     {
//       platform: 'twitter',
//       link: 'https://twitter.com/edcviit',
//       postLink: 'https://twitter.com/edcviit/status/1737772197538664771?ref_src=twsrc%5Etfw',
//       icon: 'ion-logo-twitter',
//     },
//     {
//       platform: 'linkedin',
//       link: 'https://www.linkedin.com/company/entrepreneurship-development-cell-viit/',
//       postLink: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7004407189981278208',
//       icon: 'ion-logo-linkedin'
//     },
//     {
//       platform: 'instagram',
//       link: 'https://www.instagram.com/edcviit/',
//       postLink: 'https://www.instagram.com/reel/C0_20RWr5q6/?utm_source=ig_embed&utm_campaign=loading',
//       icon: 'ion-logo-instagram'
//     },
//     {
//       platform: 'youtube',
//       link: 'https://www.youtube.com/@edcviit',
//       postLink: 'https://www.youtube.com/embed/bpmOhuTNu9Y?list=TLGGbLwNZcabL30yMzEyMjAyMw',
//       icon: 'ion-logo-youtube'
//     },
//   ];

//   return (
//     <div className='relative bg-black'>
//             <h1 className="main-heading pt-10 mb-0  bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
//               Social Media Footfall
//             </h1>
//       <div className='   flex-col  gap-y-36 p-10  md:flex-row  lg:flex w-screen h-fit text-white place-content-around '>
                    
//         {socialIcons.map((icon) => (
//           <motion.div key={icon.platform} className=" m-8  border-2 border-r-2 border-white rounded-lg p-3 text-center h-fit place-content-center hover:transform hover:translate-y-[-5px]  hover:transition-transform hover:ease-in-out hover:duration-400 duration-700   hover:border-r-2 hover:border-t-2 hover:border-[0px] hover:shadow-white hover:shadow-xl" >
//             <i
//               className={`${icon.icon} ion-3x `}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             />
//             <div className="counter  font-thin text-[40px] " data-target="3000"></div>
//             <span>{icon.platform === 'linkedin' ? 'Linkedin Fans' : `${icon.platform.charAt(0).toUpperCase() + icon.platform.slice(1)} Fans`}</span>
//           </motion.div>
//         ))}
//       </div>



//       {/* <div className="social-icon">
//         <ul>
//           {socialIcons.map((icon) => (
//             <li key={icon.platform} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//               <a
//                 href={icon.link}
//                 target="_blank"
//                 className={`icon ${icon.platform}-icon`}
//                 data-post-link={icon.postLink}
//               >

//               </a>
//             </li>
//           ))}
//         </ul>
//       </div> */}

//       {/* <div id="popup-container" className="popup-card top-3/4 " style={popupStyle}>
//         <iframe srcDoc={popupContent} width="500" height="300" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
//       </div> */}
//     </div>
//   );
// }

// export default Media2;


import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './media2.css';

const Media2 = () => {
  const [popupContent, setPopupContent] = useState('');
  const [popupStyle, setPopupStyle] = useState({ display: 'none' });
  const [countersInView, setCountersInView] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);

  const countersRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersInView(true);
          } else {
            setCountersInView(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold based on your needs
    );

    observer.observe(countersRef.current);

    return () => {
      observer.disconnect();
    };
  }, [countersStarted]);

  useEffect(() => {
    if (countersInView && !countersStarted) {
      const counters = document.querySelectorAll('.counter');

      counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const c = +counter.innerText;

          const increment = target / 100; // Adjust the increment for faster counters

          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10); // Adjust the timeout duration for faster counters
          } else {
            counter.innerText = `${target}+`;
          }
        };

        updateCounter();
      });

      setCountersStarted(true);
    }
  }, [countersInView, countersStarted]);

  const handleMouseOver = (event) => {
    const postLink = event.target.getAttribute('data-post-link');

    if (postLink) {
      const iframeCode = getIframeCode(postLink);

      // Display and position the popup in the center
      const centerStyle = centerPopup({ width: 500, height: 400 });
      setPopupStyle({ display: 'block', ...centerStyle });

      // Set the iframe HTML content in the popup container
      setPopupContent(iframeCode);
    }
  };

  const handleMouseOut = () => {
    // Do not hide the popup on mouse out
    // The popup will be hidden when moving to another icon
  };

  const getIframeCode = (link) => {
    // Check if the link is a YouTube video
    if (link.includes('youtube.com')) {
      // Add the autoplay parameter for YouTube videos
      link += '&autoplay=1';
    }

    // Return the iframe code with allow attribute for autoplay
    return `<iframe src="${link}" width="500" height="300" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>`;
  };

  const centerPopup = (size) => {
    // Center the popup in the middle of the display
    const offsetX = (window.innerWidth - size.width) / 2;
    const offsetY = (window.innerHeight - size.height) / 2;

    return { left: `${offsetX}px`, top: `${offsetY}px` };
  };

  // const socialIcons = [
    //   {
      //     platform: 'youtube',
      //     link: 'https://www.youtube.com/@edcviit',
      //     postLink: 'https://www.youtube.com/embed/bpmOhuTNu9Y?list=TLGGbLwNZcabL30yMzEyMjAyMw',
      //     icon: 'ion-logo-youtube',
      //     followers:5000
      //   },
      // ];
      
      
    const socialIcons = [
      {
        platform: 'youtube',
        link: 'https://www.youtube.com/@edcviit',
        postLink: 'https://www.youtube.com/embed/bpmOhuTNu9Y?list=TLGGbLwNZcabL30yMzEyMjAyMw',
        icon: 'ion-logo-youtube',
        followers:5000
      },
      
      {
        platform: 'instagram',
        link: 'https://www.instagram.com/edcviit/',
        postLink: 'https://www.instagram.com/reel/C0_20RWr5q6/?utm_source=ig_embed&utm_campaign=loading',
        icon: 'ion-logo-instagram',
        followers:3200
      },
      {
        platform: 'linkedin',
        link: 'https://www.linkedin.com/company/entrepreneurship-development-cell-viit/',
        postLink: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7004407189981278208',
        icon: 'ion-logo-linkedin',
        followers:2300

      },
        {
          platform: 'twitter',
          link: 'https://twitter.com/edcviit',
          postLink: 'https://twitter.com/edcviit/status/1737772197538664771?ref_src=twsrc%5Etfw',
          icon: 'ion-logo-twitter',
          followers:1200
        }, 
    ]
    
  return (
    <div className="relative mt-32">
      <div class="nine">
        <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center ">
          Social Media
        </h1>
      </div>
      <div
        ref={countersRef}
        className="flex-col gap-y-36 p-10 md:flex-row lg:flex w-screen h-fit text-white place-content-around hover:cursor-default"
      >
        {socialIcons.map((icon) => (
          <motion.div
            onClick={() => {
              window.open(icon.link, "_blank");
            }}
            key={icon.platform}
            className="m-8 border-white rounded-lg p-3 cursor-pointer text-center h-fit place-content-center hover:transform hover:translate-y-[-2px] hover:transition-transform hover:ease-in-out hover:duration-400 duration-700 hover:border-[0px] hover:shadow-white hover:shadow-sm"
          >
            <i
              className={`${icon.icon} ion-3x `}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div
              className="counter font-thin text-[40px]"
              data-target={icon.followers}
            ></div>
            <span>
              {icon.platform === "linkedin"
                ? "Linkedin "
                : `${
                    icon.platform.charAt(0).toUpperCase() +
                    icon.platform.slice(1)
                  } `}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Media2;
