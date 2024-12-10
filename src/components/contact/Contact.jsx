import React from "react";
import { FaEnvelope, FaHandsHelping, FaUserFriends, FaMicrophone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="p-4 ">
      {/* <div className="p-4 bg-black"> */}
      <p className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-4">Contact Us</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10">
        <Card
          title="Speaking Opportunities"
          subtitle="curation@vishwapreneur.in"
          href="mailto:curation@vishwapreneur.in"
          Icon={FaMicrophone}
          phone={"+91 8668351747"}
        />
        <Card title="Sponsorship Opportunities" subtitle="edcflm.sponsorship@gmail.com " href="mailto:edcflm.sponsorship@gmail.com" Icon={FaHandsHelping} phone={"+91 9834204591"} />
        <Card title="Collaboration Opportunities" subtitle='pr@vishwapreneur.in' href="mailto:pr@vishwapreneur.in" Icon={FaUserFriends} phone={"+91 8799842913"} />
        <Card
          title="Queries"
          subtitle="sales@vishwapreneur.in"
          href="mailto:sales@vishwapreneur.in "
          phone="+91 9284320165"
          Icon={FaEnvelope}
        />
      </div>
    </div>
    </div>
    
  );
};

const Card = ({ title, subtitle, Icon, href,phone }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-gray-900 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-200 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
      {/* <br /> */}
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {phone}
      </p>
    </a>
  );
};

export default Contact;