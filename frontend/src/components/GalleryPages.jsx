import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GalleryPages = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null); // Popup ke liye

  const categories = ['All', 'Blood Donation', 'Political' , 'Social Work'];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/gallery");
        setImages(res.data);
        setFilteredImages(res.data);
      } catch (err) {
        console.error("Gallery fetch error:", err);
      }
    };
    fetchImages();
  }, []);

  // Category ke hisaab se filter karne ka function
  // Category के हिसाब से फिल्टर करने का फंक्शन
const handleFilter = (cat) => {
  setActiveFilter(cat);
  if (cat === 'All') {
    setFilteredImages(images);
  } else {
    // .toLowerCase() और .trim() लगाने से छोटी-बड़ी स्पेलिंग की गलती ठीक हो जाएगी
    setFilteredImages(images.filter(img => 
      img.category && img.category.toLowerCase().trim() === cat.toLowerCase().trim()
    ));
  }
};

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <h2 className="text-4xl font-black text-navy mb-8 text-center uppercase">
        My <span className="text-bhagwa">Gallery</span>
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              activeFilter === cat ? 'bg-bhagwa text-white' : 'bg-gray-200 text-gray-700 hover:bg-navy hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((img) => (
          <div 
            key={img._id} 
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg h-64"
            onClick={() => setSelectedImg(img.image)} // Photo par click karne par popup
          >
            <img 
              src={img.image} 
              alt={img.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-lg">View Full</span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Popup (LightBox) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)} // Bahar click karne par band
        >
          <img src={selectedImg} className="max-w-full max-h-full rounded-lg shadow-2xl" alt="Full View" />
          <button className="absolute top-10 right-10 text-white text-4xl font-bold">&times;</button>
        </div>
      )}
    </div>
  );
};

export default GalleryPages;