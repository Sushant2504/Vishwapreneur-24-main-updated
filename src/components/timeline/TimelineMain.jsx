import React, { useState } from 'react';
import Timeline from './Timeline';
import 'TimelineMain.css';

const TimelineMain = () => {
    const [selectedDay, setSelectedDay] = useState(1);

    const events = {
        1: [
            {
                heading: "Opening Ceremony",
                description:[ 
                     { name: "Mr. Vivek Bhatia", role: "MD, thyssenkrupp Industries" },
                    { name: "Mr. Bharat Agarwal", role: "President, Vishwakarma University & MD, Aakar Foundry" },
                    { name: "Dr. Vivek Deshpande", role: "Director, VIIT" },
                    { name: "Dr. Radhika Purandare", role: "Dean Student Affairs, VIIT" },
                    { name: "Prof. Vaishali Mishra", role: "Faculty Mentor, EDC VIIT" },
                    { name: "Mr. Parth Chavan", role: "Convener, Vishwapreneur'24" },
                    
                ]
                    ,
                live: true,
                caseStudy: false, 
                vid: "day1-1.jpg",
            },
            {
                heading: "Mastering The Boardroom",
                description:[
                    { name: "Mr. Vivek Bhatia", role: "MD, thyssenkrupp Industries" },
                    { name: "Mr. Nikhil Malhotra", role: "CIO, TechMahindra" },
                    { name: "Mr. Bharat Agarwal", role: "President, Vishwakarma University & MD, Aakar Foundry" }
                ],
                    
                live: true,
                caseStudy: false,
                
                vid: "day1-2.jpg",
            },
            {
                heading: "Game of Graphs - Workshop",
                description:[{ name: "Mr. Sushant Bindal", role: "Founder, Money Monitors" }],
                    
                live: true,
                caseStudy: false,
                
                vid: "day1-4.jpg",
            },
            {
                heading: "Filler",
                description:[{ name: "Mr. Rahul Sherekar", role: "Singer" }],
                    
                live: true,
                caseStudy: false,
                
                vid: "day1-4.jpg",
            },
            {
                heading: "Moneywise Be Wise",
                description:[
                    { name: "Mr. Abhishek Kar", role: "Finance Content Creator" },
                    { name: "Mr. Kushal Lodha", role: "Founder, KAGR" },
                    { name: "CA Jay Desai", role: "CA, Finance Content Creator" },
                    { name: "Yogesh Agarwal", role: "Moderator" }
                ],
                    
                live: true,
                caseStudy: false,
                
                vid: "day1-5.jpg",
            },
            {
                heading: "Fashionomic with Chinu Kala",
                description:[
                    { name: "Mr. Chinu Kala", role: "Founder & CEO, Rubans" },
          
                ],
                    
                live: true,
                caseStudy: false,
                
                vid: "day1-6.jpg",
            },
        ],
        2: [  
            {  
                heading: "Ed-Tech Panel",  
                description: [  
                    {  
                        name: "Ms. Mahak Garg",  
                        role: "Director, Masters’ Union"  
                    },  
                    {  
                        name: "Mr. Shreyans Sancheti",  
                        role: "Co-Founder, bluelearn"  
                    },  
                    {  
                        name: "Mr. Harish Uthayakumar",  
                        role: "Co-Founder, bluelearn"  
                    },  
                    {  
                        name: "Krati Agarwal",  
                        role: "Moderator"  
                    }  
                ],  
                live: true,  
                caseStudy: false,  
                vid: "day2-1.jpg"  
            },  
            {  
                heading: "Dialing into Success",  
                description: [  
                    {  
                        name: "Mr. V. Krishnan",  
                        role: "Co-Founder, Justdial"  
                    }  
                ],  
                live: true,  
                caseStudy: false,  
                vid: "day2-2.jpg"  
            },  
            {  
                heading: "Peeking into the Future",  
                description: [  
                    {  
                        name: "Mr. Saurabh Jain",  
                        role: "Ex Vice-President of Paytm"  
                    }  
                ],  
                live: true,  
                caseStudy: false,  
                vid: "day2-3.jpg"   
            },  
            {  
                heading: "From Side Gig to Mainstream Maven",  
                description: [ 
                    {  
                        name: "Shreenam Legend",  
                        role: "Gaming Creator"  
                    }, 
                    {  
                        name: "RJ Soham",  
                        role: "Social Media Influencer"  
                    },   
                    {  
                        name: "Mr. Atharva Sudame",  
                        role: "Content Creator"  
                    },  
                    {  
                        name: "Mr. Rohan Yelamkar",  
                        role: "Moderator"  
                    }  
                ],  
                live: true,  
                caseStudy: false,  
                vid: "day2-4.jpg"  
            },  
            {  
                heading: "Unraveling D2C",  
                description: [  
                    {  
                        name: "Mr. Sanjay Sethi",  
                        role: "Co-Founder & CEO, ShopClues.com"  
                    }  
                ],  
                live: true,  
                caseStudy: false,  
                vid: "day2-5.jpg"  
            },  
            {  
                heading: "Closing Ceremony",  
                description: [  
                    {  
                        name: "Mr. Suresh Khopade",  
                        role: "Former IPS Officer"  
                    }  
                ],  
                live: true,  
                caseStudy: false,  
                vid: "day2-6.jpg"  
            }  
        ],
    };

    return (
        <div className="w-full bg-black min-h-screen pt-20">
            <div className="max-w-full mx-auto shadow-2xl rounded-xl">
                <h1 className="time-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-5xl font-bold text-center py-16">
                    Timeline
                </h1>

                {/* Top Day Selection */}
                <div className="mt-8 flex justify-center space-x-4">
                    {Object.keys(events).map((day) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(Number(day))}
                            className={`flex-grow max-w-sm px-6 py-3 text-lg rounded-lg font-medium transition-all transform ${
                                selectedDay === Number(day)
                                    ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white scale-105 shadow-lg"
                                    : "bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-300 hover:text-white hover:scale-105"
                            }`}
                        >
                            Day {day}
                        </button>
                    ))}
                </div>

                {/* Events List */}
                <Timeline TimelineContent={events[selectedDay]} />

               
            </div>
        </div>
    );
};

export default TimelineMain;
