import React from "react"
import Blogimage from "../images/rove.png"
export default function Blogcard() {
  return (
    <div className="blog-card">
      <a href="#">
        <img src={Blogimage} className="blog-image" />
      </a>
      <h2 className="m-0">Blog Title 1</h2>
      <p className="m-0">12 July 2020</p>
      <ul className="text-wrap">
        <li className="chip">node</li>
        <li className="chip">node</li>
        <li className="chip">node</li>
      </ul>
    </div>
  )
}
