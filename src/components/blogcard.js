import React from "react"

export default function Blogcard({ blog }) {
  let d = new Date(blog.pubDate)

  return (
    <div className="blog-card">
      <a href={blog.link} target="_blank" rel="noreferrer">
        <img src={blog.thumbnail} className="blog-image" alt="Blog" />
      </a>
      <a href={blog.link} target="_blank" rel="noreferrer">
        <h2 className="sub-heading">{blog.title}</h2>
      </a>
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
