import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // 👈 Ye line honi chahiye

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 App ko iske andar hona jaruri hai */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)