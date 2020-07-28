import React from 'react'
import Anurag from '../images/anurag.png'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function about() {
    return (
        <Layout>
      <SEO title="About Me" />
    <div className="container">
      <div className="home">
        <div className="col-lg-6">
        <h1>Hey There! I am Anurag!</h1>
        <p>A Front-End Designer and Developer based in Mumbai!</p>
        <p>Currently Looking projects and Internships to work on!</p>
        <p>Want to get in touch?Contact me here!</p>
        <p>Facebook Instagram Snapchat</p>
        </div>
        <div className="col-lg-6">
          <img src={Anurag} width="200" height="200px"></img>
        </div>
      </div>
    </div>    



  </Layout>
    )
}
