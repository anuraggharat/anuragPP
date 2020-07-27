import React from "react"
import Anurag from '../images/anurag.png'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="home">
        <div className="col-lg-6">
        <h1>Hey There! I am Anurag!</h1>
        <h2>A Front-End Designer and Developer based in Mumbai!</h2>
        <h2>Currently Looking projects and Internships to work on!</h2>
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

export default IndexPage
