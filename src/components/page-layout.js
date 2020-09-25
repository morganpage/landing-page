import React from "react"
import "./page-layout.css"
import Navbar from "./navbar"
import Footer from "./footer"

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default PageLayout
