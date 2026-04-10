import { Outlet } from "react-router-dom"

import Footer from "../../components/layout/Footer"

import "../../index.css"

export default function LayoutOnlyFooter() {
  return (
    <div className="app_layout">
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}