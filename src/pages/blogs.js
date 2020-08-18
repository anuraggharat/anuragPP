import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogcard from "../components/blogcard"

import { getBlogs } from "../APIcalls/Medium"

export default function Blogs() {
  const [blogs, setblogs] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogs()
      .then(res => {
        console.log(res)
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
      <SEO title="About Me" />
      <div className="container">
        <div className="blogs">
          <h1 className="heading">Blog</h1>
          <p>
            I was always fond of teaching and explaining concepts in a better
            understandable way.Recently I started writing blogs at{" "}
            <a href="https://medium.com/@anuraggharat" target="_blank">
              Medium
            </a>{" "}
            and I am still a newbie at it.
          </p>
          <p>Here's a list of all the blogs I have wrote so far!</p>
          {loading ? (
            <h1>Loading</h1>
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
