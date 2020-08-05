import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function contact() {
  return (
    <Layout>
      <SEO title="About Me" />
      <div className="container">
        <div className="contact">
          <h1>Contact Me</h1>
          <p>
            For work or project related enquiries mail me at:{" "}
            <a href="mailto:anuraggharat55@gmail.com" target="_blank">
              anuraggharat55@gmail.com
            </a>
          </p>
          <p>Or</p>
          <p>Ping me on my social media handles to start a conversation.</p>
          <div className="social-media-contact">
            <a href="anuraggharat.me" className="social-icons-contact">
              <FaFacebook />
            </a>
            <a href="anuraggharat.me" className="social-icons-contact">
              <FaInstagram />
            </a>
            <a href="anuraggharat.me" className="social-icons-contact">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
