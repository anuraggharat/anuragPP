import React from "react"
import Layout from "../components/layout"
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
            <h4 className="m-0 mt-2">Freelancing</h4>
            <h4 className="m-0 ">
              <i>Freelance Web-Developer | April 2020 - Now </i>
            </h4>
            <p>Currently working as a</p>
          </div>
          <div className="about-section">
            <h2>Technical Skills</h2>
            <p>
              Currently working as Freelance Web Developer. I specialize in
              Front-end Frameworks like React, Angular and Vue but can work as a
              Full-Stack Developer.Apart from Web Technologies I have been
              studying and learning Native App Development using React
              Native.Here is the list of technologies and Programming languages
              I have a command on
            </p>
            <ul className="text-wrap">
              <li className="chip">Python</li>
              <li className="chip">C</li>
              <li className="chip">Javascript</li>
              <li className="chip">HTML</li>
              <li className="chip">CSS</li>
              <li className="chip">SASS</li>
              <li className="chip">CSS-Frameworks</li>
              <li className="chip">React</li>
              <li className="chip">Redux</li>
              <li className="chip">Angular 9</li>
              <li className="chip">Vue</li>
              <li className="chip">Node</li>
              <li className="chip">Firebase</li>
              <li className="chip">MongoDB</li>
              <li className="chip">MySQL</li>
              <li className="chip">React Native</li>
              <li className="chip">Adobe-Xd</li>
              <li className="chip">Figma</li>
              <li className="chip">Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
