import React from 'react';
// 📸 सही इम्पोर्ट: पक्का करें कि profile.png आपके assets फोल्डर में है
import profileImg from '../assets/profile.png'; 
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] overflow-hidden font-sans">
      
      {/* 🎨 आधुनिक बैकग्राउंड डिजाइन */}
      <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-br from-red-700 to-red-500 -skew-y-3 origin-top-left z-0 shadow-2xl"></div>
      <div className="absolute bottom-0 right-0 w-full h-[35%] bg-gradient-to-tr from-[#0a192f] to-blue-900 skew-y-3 origin-bottom-right z-0 shadow-inner opacity-90"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between relative z-10 pt-32 pb-20">
        
        {/* 📝 टेक्स्ट कंटेंट */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-red-700 font-serif italic text-2xl mb-2 font-semibold">Namaste, I am</h4>
          <h1 className="text-[#0a192f] font-black text-5xl md:text-7xl leading-tight uppercase tracking-tighter mb-2">
            Chanchal <span className="text-gray-500">Soni</span>
          </h1>
          <h2 className="text-red-600 font-bold text-2xl md:text-3xl mb-6 uppercase tracking-wide">
            Bharitya Janta Yuva Morcha (Guna)
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg leading-relaxed font-medium">
            Dedicated Social Worker & Director of Shiva Charitable Blood Centre, Guna. 
          </p>

          {/* 📱 सोशल मीडिया आइकॉन्स */}
          <div className="flex justify-center md:justify-start gap-4 mb-10">
            <a href="https://www.facebook.com/share/186mi4SBPX/" className="bg-blue-800 text-white p-3 rounded-full text-xl shadow-lg hover:scale-110 transition-all flex items-center justify-center w-12 h-12"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ichanchalssoni?igsh=MWY0bDd2dXM5dHFtYQ==" className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white p-3 rounded-full text-xl shadow-lg hover:scale-110 transition-all flex items-center justify-center w-12 h-12"><FaInstagram /></a>
            <a href="c:\Users\Dell\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\23E7F7A2504D6423B97EE4BAED9433AD2383E9A4\transfers\2026-07\WhatsApp Image 2026-02-17 at 6.45.49 PM.jpeg" className="bg-green-500 text-white p-3 rounded-full text-xl shadow-lg hover:scale-110 transition-all flex items-center justify-center w-12 h-12"><FaWhatsapp /></a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#0a192f] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 shadow-2xl transition-all">
              Connect With Me
            </button>
          </div>
        </div>

        {/* 📸 इमेज सेक्शन - Import की गई फोटो का इस्तेमाल */}
        <div className="w-full md:w-1/2 relative mt-20 md:mt-0 flex justify-center items-center">
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border-[15px] border-red-600/20 rounded-full animate-pulse"></div>
          
          {/* ✅ यहाँ हमने profileImg वेरिएबल का इस्तेमाल किया है */}
          <img 
            src={profileImg} 
            alt="Chanchal Soni" 
            className="relative z-10 w-[85%] md:w-[90%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;