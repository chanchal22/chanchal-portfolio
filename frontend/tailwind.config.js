/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/About.jsx",
    "./src/components/Projects.jsx",
    "./src/components/Contact.jsx",
    "./src/components/Blog.jsx",
    "./src/components/GalleryPages.jsx",
    "./src/components/Admin.jsx",
    "./src/components/Home.jsx", // <--- Home.jsx यहाँ मौजूद है
  ],
  theme: {
    extend: {
      colors: {
        // आपके पुराने कलर्स सुरक्षित हैं
        bhagwa: '#FF9933', 
        navy: '#003366',
      },
      // 🚀 नए एनिमेशन जो होम पेज को 'Stunning' बनाएंगे
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'fadeIn': 'fadeIn 1.5s ease-out',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}