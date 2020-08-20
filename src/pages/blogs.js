import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogcard from "../components/blogcard"
import { getBlogs } from "../APIcalls/Medium"
import Loader from "../components/Loader"

export default function Blogs() {
  const [blogs, setblogs] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogs()
      .then(res => {
        if (res.status) {
          setblogs(res.items)
        } else {
          setblogs([])
        }
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="container">
        <div className="blogs">
          <h1
            className="heading"
            data-sal="slide-down"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            Blog
          </h1>
          <div
            data-sal="slide-down"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            {" "}
            <p>
              Being a Self taught Developer I was always fond of learning new
              technologies and sharing them. I write on Technical concepts and
              try explaining them in a better understandable way.You can find
              them on{" "}
              <a
                href="https://medium.com/@anuraggharat"
                target="_blank"
                rel="noreferrer"
                className="bold primary-text"
              >
                Medium
              </a>{" "}
            </p>
            <p>Here's a list of all the blogs I have wrote so far!</p>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div>
              {blogs.map(blog => (
                <Blogcard blog={blog} key={blog.link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
