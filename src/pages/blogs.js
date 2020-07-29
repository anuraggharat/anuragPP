import React from "react"
import Anurag from "../images/anurag.png"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
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
          <div
            id="retainable-rss-embed"
            data-rss="https://medium.com/feed/@anuraggharat"
            data-maxcols="3"
            data-layout="grid"
            data-poststyle="inline"
            data-readmore="Read the rest"
            data-buttonclass="btn btn-primary"
            data-offset="-100"
          ></div>
        </div>
      </div>
    </Layout>
  )
}
