import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
// import Anurag from "../images/anurag.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Anurag Gharat" />
    <div className="container">
      <div className="home">
        <div className="col-lg-6">
          <h1 className="intro-line">
            Hey There, I am <br /> <span className="name">Anurag!</span>
          </h1>
          <p>A Front-End Developer based in Mumbai.</p>
          <p>I create products for the Web with great User Experience.</p>
          <p>Currently looking for Projects and Internships to work on!</p>
          <p>Want to get in touch?Contact me here!</p>
          <div className="social-media">
            <a href="anuraggharat.me" className="social-icons">
              <FaFacebook />
            </a>
            <a href="anuraggharat.me" className="social-icons">
              <FaInstagram />
            </a>
            <a href="anuraggharat.me" className="social-icons">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        {/* <div className="col-lg-6">
          <img src={Anurag} width="200" height="200px"></img>
        </div> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
