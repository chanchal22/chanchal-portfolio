import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'; 
import { FaPenNib, FaImages, FaTrash, FaEdit, FaCloudUploadAlt } from 'react-icons/fa';

// API URL
const API_URL = 'http://localhost:5000/api';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('blog'); 
  const [loading, setLoading] = useState(false);
  
  const [blogPosts, setBlogPosts] = useState([]); 
  const [galleryPosts, setGalleryPosts] = useState([]); 

  // Form States
  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [blogData, setBlogData] = useState({ title: '', category: 'Social Work', desc: '', image: null });
  const [galleryData, setGalleryData] = useState({ title: '', category: 'Blood Donation', image: null });

  // 1. Fetch Data
  const fetchBlogPosts = useCallback(async () => {
    try { const res = await axios.get(API_URL + "/blogs"); setBlogPosts(res.data); } 
    catch (err) { console.error(err); }
  }, []);

  const fetchGalleryPosts = useCallback(async () => {
    try { const res = await axios.get(API_URL + "/gallery"); setGalleryPosts(res.data); } 
    catch (err) { console.error(err); }
  }, []);

  useEffect(() => { fetchBlogPosts(); fetchGalleryPosts(); }, [fetchBlogPosts, fetchGalleryPosts]);

  // 2. Handlers
  const handleBlogChange = (e) => setBlogData({ ...blogData, [e.target.name]: e.target.value });
  const handleBlogFile = (e) => setBlogData({ ...blogData, image: e.target.files[0] });
  const handleGalleryChange = (e) => setGalleryData({ ...galleryData, [e.target.name]: e.target.value });
  const handleGalleryFile = (e) => setGalleryData({ ...galleryData, image: e.target.files[0] });

  // 3. Delete Actions
  const handleDeleteBlog = async (id) => {
    if (window.confirm("Delete this blog?")) {
      await axios.delete(API_URL + "/blogs/" + id); fetchBlogPosts();
    }
  };
  const handleDeleteGallery = async (id) => {
    if (window.confirm("Delete this photo?")) {
      await axios.delete(API_URL + "/gallery/" + id); fetchGalleryPosts();
    }
    // 4. Logout Action
const handleLogout = () => {
    if (window.confirm("क्या आप वाकई लॉगआउट करना चाहते हैं?")) {
        localStorage.removeItem("adminToken"); // टोकन हटाएँ
        window.location.reload(); // पेज रिफ्रेश करें
    }
};
  };

  // 4. Edit Actions
  const handleEditBlogBtn = (post) => {
    setActiveTab('blog'); setIsEditingBlog(true); setEditBlogId(post._id);
    setBlogData({ title: post.title, category: post.category, desc: post.desc, image: null });
  };
  const cancelEditBlog = () => {
    setIsEditingBlog(false); setEditBlogId(null);
    setBlogData({ title: '', category: 'Social Work', desc: '', image: null });
  };

  // 5. Submit Functions
  const submitBlog = async (e) => {
    e.preventDefault(); setLoading(true);
    const data = new FormData();
    data.append('title', blogData.title); data.append('category', blogData.category);
    data.append('desc', blogData.desc); 
    if (blogData.image) data.append('image', blogData.image);

    try {
      if (isEditingBlog) {
        await axios.put(API_URL + "/blogs/" + editBlogId, data, { headers: { 'Content-Type': 'multipart/form-data' } });
        alert('Updated!'); cancelEditBlog();
      } else {
        await axios.post(API_URL + "/blogs", data, { headers: { 'Content-Type': 'multipart/form-data' } });
        alert('Published!'); setBlogData({ title: '', category: 'Social Work', desc: '', image: null });
      }
      fetchBlogPosts();
    } catch (error) { alert('Error!'); } finally { setLoading(false); }
  };

  const submitGallery = async (e) => {
  e.preventDefault();
  setLoading(true);
  const data = new FormData();
  data.append('title', galleryData.title || 'Untitled');
  data.append('category', galleryData.category);
  // 'image' नाम वही होना चाहिए जो बैकएंड में 'upload.single' में है
  data.append('image', galleryData.image); 

  try {
    await axios.post(API_URL + "/gallery", data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    alert('Photo Added Successfully! ✅');
    // फॉर्म साफ़ करें
    setGalleryData({ title: '', category: 'Blood Donation', image: null });
    fetchGalleryPosts();
  } catch (error) {
    console.error("Upload Error:", error);
    alert('Upload Failed! ❌');
  } finally {
    setLoading(false);
  }
};
const handleLogout = () => {
  if (window.confirm("क्या आप वाकई लॉगआउट करना चाहते हैं?")) {
    localStorage.removeItem("adminToken"); // टोकन डिलीट करें
    window.location.reload(); // पेज रिफ्रेश करें जिससे लॉगिन पेज आ जाए
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl border border-gray-100 mb-10 overflow-hidden">
        
        {/* Buttons Section - Fixed Syntax */}
        <div className="bg-navy p-4 text-white text-center flex justify-center gap-4">
            <button 
              onClick={() => setActiveTab('blog')} 
              className={"px-4 py-2 rounded-full font-bold " + (activeTab === 'blog' ? "bg-bhagwa" : "bg-blue-900")}
            >
              Blog Form
            </button>
            <button 
              onClick={() => setActiveTab('gallery')} 
              className={"px-4 py-2 rounded-full font-bold " + (activeTab === 'gallery' ? "bg-bhagwa" : "bg-blue-900")}
            >
              Gallery Form
            </button>
            {/* Logout Button */}
<button
  onClick={handleLogout}
  className="px-4 py-2 rounded-full font-bold bg-red-600 text-white hover:bg-red-700 transition-all flex items-center gap-2"
>
  <FaTrash /> Logout
</button>
        </div>

        <div className="p-6">
          {activeTab === 'blog' ? (
            <form onSubmit={submitBlog} className="space-y-4">
              <h3 className="font-bold text-xl">{isEditingBlog ? "Edit Blog" : "New Blog"}</h3>
              <input type="text" name="title" value={blogData.title} onChange={handleBlogChange} placeholder="Title" required className="w-full border p-2 rounded" />
              <select name="category" value={blogData.category} onChange={handleBlogChange} className="w-full border p-2 rounded"><option>Social Work</option><option>Political Event</option><option>Youth Motivation</option><option>Religious/Cultural</option></select>
              <textarea name="desc" value={blogData.desc} onChange={handleBlogChange} placeholder="Content" required rows="4" className="w-full border p-2 rounded"></textarea>
              <input type="file" onChange={handleBlogFile} className="border p-2 w-full rounded" />
              <button type="submit" disabled={loading} className="w-full bg-navy text-white py-3 rounded font-bold">{loading ? "Wait..." : "Submit"}</button>
              {isEditingBlog && <button type="button" onClick={cancelEditBlog} className="text-red-500 text-sm font-bold mt-2">Cancel Edit</button>}
            </form>
          ) : (
            <form onSubmit={submitGallery} className="space-y-4">
              <h3 className="font-bold text-xl">Add to Gallery</h3>
              <input type="text" name="title" value={galleryData.title} onChange={handleGalleryChange} placeholder="Title" className="w-full border p-2 rounded" />
              <select name="category" value={galleryData.category} onChange={handleGalleryChange} className="w-full border p-2 rounded"><option value="Blood Donation">Blood Donation</option><option value="Political">Political</option><option value="Social">Social Work</option></select>
              <input type="file" id="galleryFileInput" onChange={handleGalleryFile} required className="border p-2 w-full rounded" />
              <button type="submit" disabled={loading} className="w-full bg-navy text-white py-3 rounded font-bold">{loading ? "Wait..." : "Upload Photo"}</button>
            </form>
          )}
        </div>
      </div>
      
      {/* Blog & Gallery Lists */}
      <div className="max-w-4xl w-full grid gap-4">
        {activeTab === 'blog' ? blogPosts.map(post => (
          <div key={post._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <h4 className="font-bold">{post.title}</h4>
            <div className="flex gap-2">
              <button onClick={() => handleEditBlogBtn(post)} className="text-blue-600"><FaEdit/></button>
              <button onClick={() => handleDeleteBlog(post._id)} className="text-red-600"><FaTrash/></button>
            </div>
          </div>
        )) : galleryPosts.map(photo => (
          <div key={photo._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
             <div className="flex items-center gap-4"><img src={photo.image} className="h-10 w-10 object-cover rounded"/> <span className="font-bold">{photo.title}</span></div>
             <button onClick={() => handleDeleteGallery(photo._id)} className="text-red-600"><FaTrash/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;