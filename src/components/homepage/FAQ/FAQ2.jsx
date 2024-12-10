import React, { useState } from 'react';
import FAQItem1 from './FAQItem1';
import ScrollAnimation1 from '../../Animations/ScrollAnimation1';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FAQ.css'; 

const FaqAccordion = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const faqItems = [
    {
      id: 1,
      question: "What is Vishwapreneur?",
      answer:
        "Vishwapreneur is a National Level Entrepreneurial Summit showcasing entrepreneurs, creators and innovative minds of our century who had the courage to think out of the box. Vishwapreneur is a platform for budding entrepreneurs to seek motivation & guidance through the experiences of successful business tycoons.",
    },
    {
      id: 2,
      question: "Who can participate in the event?",
      answer:
        "Anyone and everyone who is interested in entrepreneurship, innovation, and business and wants to do something different from the rest of the people should participate in the event.",
    },
    {
        id:3 ,
        question:"What is the purpose of Vishwapreneur?",
        answer:"The purpose of the summit is to provide a platform for budding entrepreneurs to seek motivation and guidance through the experiences of successful business tycoons."
    },
    {
        id:4,
        question:"Who will be the speakers this year?",
        answer:"The Vishwapreneur will feature successful entrepreneurs business leaders, experts in the field of entrepreneurship or anyone who has done something BIG in their life."
    },
    {
        id:5,
        question:"What are the dates and timings?",
        answer:"Dates are 2nd and 3rd March and stay tuned for the timings."
    },
    {
        id:6,
        question:"How can I register for the summit?",
        answer:"You can register for the summit by visiting the website or directly by signing up on Vishwapreneur."
    }
    
  ];

  const handleItemClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };


  //this is the file for Faq temooraraily disabled for phase 1 VP

  // return (
  //   <div>
  //     <div class="nine">
  //       <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center py-8">
  //         FAQ'S
  //       </h1>
  //     </div>
  //     <div className="faqs p-16 pt-1">
  //       <div className="questions">
  //         <motion.div
  //           ref={ref}
  //           className="top"
  //           data-aos="fade-right"
  //           data-aos-duration="2000"
  //           initial={{ opacity: 0, translateY: 50 }}
  //           animate={inView ? { opacity: 1, translateY: 0 } : {}}
  //           transition={{ duration: 0.3, delay: 0.2 }}
  //         >
  //           {faqItems.slice(0, 2).map((item) => (
  //             <FAQItem1
  //               key={item.id}
  //               id={item.id}
  //               question={item.question}
  //               answer={item.answer}
  //               isSelected={selectedItem === item.id}
  //               onItemClick={handleItemClick}
  //             />
  //           ))}
  //         </motion.div>
  //         <motion.div
  //           ref={ref}
  //           className="mid"
  //           data-aos="fade-right"
  //           data-aos-duration="2000"
  //           initial={{ opacity: 0, translateY: 50 }}
  //           animate={inView ? { opacity: 1, translateY: 0 } : {}}
  //           transition={{ duration: 0.3, delay: 0.4 }}
  //         >
  //           {faqItems.slice(2, 4).map((item) => (
  //             <FAQItem1
  //               key={item.id}
  //               id={item.id}
  //               question={item.question}
  //               answer={item.answer}
  //               isSelected={selectedItem === item.id}
  //               onItemClick={handleItemClick}
  //             />
  //           ))}
  //         </motion.div>
  //         <motion.div
  //           ref={ref}
  //           className="bottom"
  //           data-aos="fade-right"
  //           data-aos-duration="2000"
  //           initial={{ opacity: 0, translateY: 50 }}
  //           animate={inView ? { opacity: 1, translateY: 0 } : {}}
  //           transition={{ duration: 0.3, delay: 0.6 }}
  //         >
  //           {faqItems.slice(4).map((item) => (
  //             <FAQItem1
  //               key={item.id}
  //               id={item.id}
  //               question={item.question}
  //               answer={item.answer}
  //               isSelected={selectedItem === item.id}
  //               onItemClick={handleItemClick}
  //             />
  //           ))}
  //         </motion.div>
  //       </div>
  //     </div>
  //   </div>
  // );
    };

export default FaqAccordion;
