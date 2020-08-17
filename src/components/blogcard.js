import React from "react"
import Blogimage from "../images/rove.png"
export default function Blogcard({ blog }) {
  let d = new Date(blog.pubDate)

  return (
    <div className="blog-card">
      <a href={blog.link} target="_blank">
        <img src={blog.thumbnail} className="blog-image" />
      </a>
      <h2 className="m-0">{blog.title}</h2>
      {blog.pubDate ? <p>{d.toDateString()}</p> : <p>A while ago</p>}
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
