import React from "react"
import Blogimage from "../images/rove.png"
export default function Blogcard({ blog }) {
  return (
    <div className="blog-card">
      <a href="#">
        <img src={blog.thumbnail} className="blog-image" />
      </a>
      <h2 className="m-0">{blog.title}</h2>
      <p className="m-0">{blog.pubDate}</p>
      <ul className="text-wrap">
        {blog.categories.map(item => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
