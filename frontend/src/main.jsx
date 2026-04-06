import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"

import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import AppRoutes from "./routes/AppRoutes.jsx"

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='app_layout'>
        <NavBar />
        <div className='content'>
          <AppRoutes />  
        </div>
        <Footer />
      </div>
    </BrowserRouter>  
  </StrictMode>,
)
