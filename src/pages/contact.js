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
          <h1
            className="heading"
            data-sal="slide-down"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            Contact Me
          </h1>
          <div
            data-sal="slide-down"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <p>
              For work or project related enquiries mail me at:{" "}
              <a
                href="mailto:anuraggharat55@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                anuraggharat55@gmail.com
              </a>
            </p>
            <p>Or</p>
            <p>Ping me on my social media handles to start a conversation.</p>
          </div>
          <div className="social-media-contact">
            <a
              href="anuraggharat.me"
              className="social-icons-contact"
              target="_blank"
              rel="noreferrer"
              data-sal="slide-down"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <FaFacebook />
            </a>
            <a
              href="anuraggharat.me"
              className="social-icons-contact"
              target="_blank"
              rel="noreferrer"
              data-sal="slide-down"
              data-sal-delay="800"
              data-sal-easing="ease"
            >
              <FaInstagram />
            </a>
            <a
              href="anuraggharat.me"
              className="social-icons-contact"
              target="_blank"
              rel="noreferrer"
              data-sal="slide-down"
              data-sal-delay="1000"
              data-sal-easing="ease"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
