import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaLinkedin, FaGithub } from "react-icons/fa"
// import Anurag from "../images/anurag.png"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Anurag Gharat" />
      <div className="container">
        <div className="home">
          <div className="col-lg-6">
            <h1
              className="intro-line"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Hey There, I am <br /> <span className="name">Anurag!</span>
            </h1>
            <p data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
              A Front-End Developer based in Mumbai.
            </p>
            <p data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
              I create products for the Web with great User Experience.
            </p>
            <p data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease">
              Currently looking for Projects and Internships to work on!
            </p>
            <p data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">
              Want to get in touch? Find me here!
            </p>
            <div
              className="social-media"
              data-sal="slide-down"
              data-sal-delay="800"
              data-sal-easing="ease-in"
            >
              <a
                href="https://github.com/anuraggharat"
                className="social-icons"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anurag-gharat-25541b18b/"
                className="social-icons"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin />
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
}

export default IndexPage
