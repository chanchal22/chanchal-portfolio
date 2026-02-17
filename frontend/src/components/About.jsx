import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy uppercase tracking-wide">
            My Vision & Mission 🎯
          </h2>
          <div className="mt-2 h-1 w-20 bg-bhagwa mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Text */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="text-4xl font-bold text-bhagwa mr-2">"</span>
              Mera manna hai ki rajneeti sirf satta ka nahi, balki <b>Seva</b> ka madhyam hai.
              Main pichle <b>10 varshon</b> se Guna ke yuvaon aur samaj ke liye niranatar kaam kar raha hoon.
            </p>
            <p>
              Hamara lakshya ek aise samaj ka nirmaan karna hai jahan har yuva ko rozgaar, 
              har kisan ko samman, aur har mahila ko suraksha mile.
            </p>
            
            {/* Signature Area */}
            <div className="pt-4">
              <p className="font-bold text-navy text-xl">Chanchal Soni</p>
              <p className="text-sm text-gray-500">Social Worker</p>
            </div>
          </div>

          {/* Right Side: Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-bhagwa mb-2">10+</h3>
              <p className="text-navy font-semibold">Years of Service</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-navy mb-2">500+</h3>
              <p className="text-gray-600 font-semibold">Lives Impacted</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-navy mb-2">50+</h3>
              <p className="text-gray-600 font-semibold">Social Projects</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-bhagwa mb-2">24/7</h3>
              <p className="text-navy font-semibold">Public Support</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;