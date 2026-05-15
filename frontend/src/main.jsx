import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast"

import AppRoutes from "./routes/AppRoutes.jsx"
import { AuthProvider } from './context/AuthContext.jsx'

import './index.css'

const toastStyle = {
  fontSize: '18px',
  padding: '16px 20px',
  minWidth: '280px',
  borderRadius: '10px',
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster toastOptions={{ style: toastStyle }}/>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>
)