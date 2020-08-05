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
              I am Anurag Gharat. Currently pursuing my 4th year of Bachelor's
              Degree in Computer Science from RAIT Nerul.I completed my Junior
              College and School from Alibag.
            </p>
            <p>
              I picked up on making websites as a hobby in my 2nd year of
              Engineering and look forward to continue it as a Professional
              Career. I specialize in creating and developing Front-Ends and
              designing the UI's.I am fluent in Front-End Frameworks like React
              and Angular. I do work on backend as well when needed. Apart from
              Web Technologies I have been studying and learning Native App
              Development using React Native
            </p>
            <p>
              I am fascinated about Designing and Developing products with
              modern and great User Experience. I fond of coding and the entire
              process involving in creating a project.
            </p>
          </div>
          <div className="about-section">
            <h2>Technical Skills</h2>
            <p>
              With a 2 years of Experience in Web Development, here is a list of
              Technologies and Programming Languages I am capable of working on!
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
          <div className="about-section">
            <h2>Past Work Experience</h2>
            <h3 className="m-0">Edunomics</h3>
            <p className="m-0 ">
              <i>Web-App Developer Intern | May 2020 - July 2020 </i>
            </p>
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
            <h3 className="m-0 mt-2">Freelancing</h3>
            <p className="m-0 ">
              <i>Freelance Web-Developer | April 2020 - Now </i>
            </p>
            <p>
              I began working as a Freelance Developer from April 2020, since
              then I have worked with all types of clients and businessmen and
              helped them in creating there websites.The main motive of all the
              projects was to provide the Simplest, Feasible and Cost Friendly
              Solutions for their projects. The technologies used during this
              period was HTML , CSS, JS, Jquery, Gatsby, Bootstrap, Wordpress
              ,Bootstrap and various other Technologies.Some note worthy
              projects are{" "}
              <a href="http://littleearthfarmsandnursery.com/" target="_blank">
                littleearth.com
              </a>
              {" , "}
              <a href="http://littleearthfarmsandnursery.com/" target="_blank">
                littleearth.com
              </a>
              {" , "}
              <a href="http://littleearthfarmsandnursery.com/" target="_blank">
                littleearth.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
