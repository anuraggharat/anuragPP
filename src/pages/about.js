import React from "react"
import Anurag from "../images/anurag.png"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function about() {
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
            <h2>Past Work Experience</h2>
            <h4 className="m-0">Edunomics</h4>
            <h4 className="m-0 ">
              <i>Web-App Developer Intern | May 2020 - July 2020 </i>
            </h4>
            <p>
              Worked primarily as a Front-End Developer and built various
              websites for the Organization . Also Developed new websites and
              worked on enhancing the UI’s and performance of previously built
              websites for the client projects of the Organization while leading
              a team of 6 Developers. The technology stack on which I worked
              included React, Redux ,CSS Frameworks, Node, Express and MongoDB.
              Completed projects :- edunomics.in , tech.edunomics.in ,
              wenester.edunomics.in , nikhilcomforts.com etc.
            </p>
          </div>
          <div className="about-section">
            <h2>Technical Skills</h2>
            <ul className="text-wrap">
              <li className="chip">React</li>
              <li className="chip">Angular9</li>
              <li className="chip">Vue</li>
              <li className="chip">Node</li>
              <li className="chip">Firebase</li>
              <li className="chip">MongoDB</li>
              <li className="chip">Javascript</li>
              <li className="chip">Python</li>
              <li className="chip">CSS</li>
              <li className="chip">SASS</li>
              <li className="chip">Bootstrap</li>
              <li className="chip">Materialize</li>
              <li className="chip">React</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
