import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaCalendarAlt } from 'react-icons/fa';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

 useEffect(() => {
  const getBlog = async () => {
    try {
      // Yahan backticks (`) ka upyog karein
      const res = await axios.get("http://localhost:5000/api/blogs/" + id);
      setBlog(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  getBlog();
}, [id]);

  if (!blog) return <div className="pt-32 text-center font-bold">Loading Post...</div>;

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <img src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-8" />
        <div className="flex items-center gap-6 text-gray-500 mb-4 font-bold text-sm uppercase tracking-widest">
          <span className="flex items-center gap-2"><FaCalendarAlt className="text-bhagwa"/> {new Date(blog.date).toLocaleDateString()}</span>
          <span className="flex items-center gap-2"><FaEye className="text-navy"/> {blog.views} Views</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-navy mb-6">{blog.title}</h1>
        <div className="h-1 w-20 bg-bhagwa mb-8"></div>
        <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;