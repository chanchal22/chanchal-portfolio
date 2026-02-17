import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye, FaCalendarAlt } from 'react-icons/fa';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setPosts(res.data);
      } catch (err) { console.error(err); }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-white py-12 px-4 pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-navy text-center mb-12 uppercase tracking-widest">
          Latest <span className="text-bhagwa">Updates</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
              <div className="h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span className="bg-blue-50 text-navy px-3 py-1 rounded-full">{post.category || "Social Work"}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-bhagwa" /> {new Date(post.date).toLocaleDateString()}</span>
                </div>

                <h3 className="text-xl font-bold text-navy mb-3 uppercase line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{post.desc}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                 <Link 
  to={"/blog/" + post._id} 
  className="text-bhagwa font-bold text-sm border-b-2 border-bhagwa hover:text-navy hover:border-navy transition-all pb-1"
>
  READ FULL STORY
</Link>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaEye className="text-navy opacity-50" /> {post.views || 0}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;