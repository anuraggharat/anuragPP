import React from "react"
import Blogimage from "../images/rove.png"
export default function Blogcard() {
  return (
    <div className="blog-card">
      <img src={Blogimage} className="blog-image" />
      <h2 className="m-0">Blog name 1</h2>
      <p className="m-0">Anurag Gharat</p>
      <button>Read on Medium</button>
    </div>
  )
}
