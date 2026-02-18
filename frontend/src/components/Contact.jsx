import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-navy text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Contact Details */}
        <div>
          <h2 className="text-3xl font-bold text-bhagwa uppercase mb-6">Contact Details 📞</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Agar aapke paas koi sujhav hai ya blood donation se judi jankari chahiye, to sampark karein.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-bhagwa p-3 rounded-full text-white"><FaMapMarkerAlt size={20} /></div>
              <div>
                <p className="font-bold text-lg">Address:</p>
                <p className="text-gray-400">Shiva Charitable Blood Centre, <br/>XYZ Road, Guna, Madhya Pradesh</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-bhagwa p-3 rounded-full text-white"><FaPhoneAlt size={20} /></div>
              <div>
                <p className="font-bold text-lg">Phone:</p>
                <p className="text-gray-400">+91 99999 99999</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-bhagwa p-3 rounded-full text-white"><FaEnvelope size={20} /></div>
              <div>
                <p className="font-bold text-lg">Email:</p>
                <p className="text-gray-400">contact@chanchalsoni.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex space-x-6">
            <a href="https://www.facebook.com/ichanchalssoni" className="text-gray-300 hover:text-bhagwa text-3xl"><FaFacebook /></a>
            <a href="https://www.instagram.com/ichanchalssoni" className="text-gray-300 hover:text-bhagwa text-3xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-bhagwa text-3xl"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-bhagwa text-3xl"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Right Side: Google Map (Guna Location) */}
        <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.539272898739!2d77.2980!3d24.6469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3970d1e000000001%3A0x0!2sGuna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;