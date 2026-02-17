import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Shiva Charitable Blood Centre",
    category: "Healthcare Service",
    link: "/blood-seva", // 👈 Ye link decide karega kaha jana hai
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Youth Leadership (Yuva Morcha)",
    category: "Political Leadership",
    link: "/yuva-shakti",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Social Welfare Initiatives",
    category: "Community Seva",
    link: "/social-work",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
  }
];

const Projects = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-navy">Key Initiatives & Works 🏗️</h2>
          <p className="text-gray-500 mt-2">Click on cards to see photos</p>
          <div className="mt-4 h-1 w-24 bg-bhagwa mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Link to={project.link} key={index} className="block group"> {/* 👈 Link wrapper */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border-b-4 border-bhagwa">
                <div style={{ height: '220px', width: '100%' }}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-bhagwa uppercase bg-orange-100 px-2 py-1 rounded">{project.category}</span>
                  <h3 className="mt-4 text-xl font-bold text-navy mb-2">{project.title}</h3>
                  <p className="text-navy font-bold text-sm mt-4">View Gallery →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;