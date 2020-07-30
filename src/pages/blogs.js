import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogcard from "../components/blogcard"
export default function blogs() {
  return (
    <Layout>
      <SEO title="About Me" />
      <div className="container">
        <div className="blogs">
          <h1>Blog</h1>
          <p>
            I was always fond of teaching and explaining concepts in a better
            understandable way.Recently I started writing blogs at medium.com
            and I am still a newbie at it.
          </p>
          <p>Here's a list of all the blogs I have wrote so far!</p>
          <div className="row">
            <Blogcard></Blogcard>
            <Blogcard></Blogcard>
            <Blogcard></Blogcard>
            <Blogcard></Blogcard>
          </div>
        </div>
      </div>
    </Layout>
  )
}
