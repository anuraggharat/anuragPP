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
        <div className="about">
          <h1 className="heading">About Me</h1>
          <div className="about-section">
            <p>
              Hello, I am Anurag Gharat, a Front-End Developer from Mumbai.I am
              Currently in my Final Year of Computer Engineering. I was born in
              Alibag and currently residing in Nerul,Navi-Mumbai.
            </p>
            <p>
              Hello, I am Anurag Gharat, a Front-End Developer from Mumbai.I am
              Currently in my Final Year of Computer Engineering. I was born in
              Alibag and currently residing in Nerul,Navi-Mumbai.
            </p>
            <p>
              Hello, I am Anurag Gharat, a Front-End Developer from Mumbai.I am
              Currently in my Final Year of Computer Engineering. I was born in
              Alibag and currently residing in Nerul,Navi-Mumbai.
            </p>
          </div>
          <div className="about-section">
            <h3 className="m-0">Past Work Experience</h3>
            <h5>Edunomics</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}
