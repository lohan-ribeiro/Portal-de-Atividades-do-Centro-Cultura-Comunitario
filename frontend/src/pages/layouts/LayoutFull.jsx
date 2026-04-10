import { Outlet } from "react-router-dom"
import NavBar from "../../components/layout/NavBar"
import Footer from "../../components/layout/Footer"

import "../../index.css"

export default function LayoutFull() {
  return (
    <div className="app_layout">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}