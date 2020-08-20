import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function about() {
  return (
    <Layout>
      <SEO title="About Me" />
      <div className="container">
        <div className="about">
          <h1
            className="heading"
            data-sal="slide-down"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            About Me
          </h1>
          <div className="about-section">
            <p>
              I am Anurag Gharat. Currently pursuing my 4th year of Bachelor's
              Degree in Computer Science from RAIT Nerul.I completed my Junior
              College and Schooling from Alibag, Maharashtra.
            </p>
            <p className="mt-2">
              I picked up on making websites as a hobby in my 2nd year of
              Engineering and look forward to continue it as a Professional
              Career. I specialize in creating and developing Front-Ends and
              designing the UI's. I am fluent in Front-End Frameworks like React
              and Angular but I do work on backend as well when needed. Apart
              from Web technologies I have been studying and learning Native App
              Development using React Native.
            </p>
            <p className="mt-2">
              I am fascinated about Designing and Developing products with
              modern and great User Experience. I am fond of coding and the
              entire process involving in planning and creating a project.
            </p>
          </div>
          <div
            className="about-section"
            data-sal="slide-down"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            <h2 className="sub-heading">Technical Skills</h2>
            <p>
              With a 2 years of Experience in Web Development, here is a list of
              Technologies, Programming Languages and Tools I am capable of
              working on!
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
            <h2 className="sub-heading">Past Work Experience</h2>
            <ul>
              <li>
                <h2 className=" primary-text">Edunomics</h2>
              </li>
              <p className=" bold">
                <i>Web-App Developer Intern | May 2020 - July 2020 </i>
              </p>
              <p>
                Worked primarily as a Front-End Developer and built various
                websites for the Organization . Also Developed new websites and
                worked on enhancing the UI’s and performance of previously built
                websites for the client projects of the Organization while
                leading a team of 6 Developers. The technology stack on which I
                worked included React, Redux ,CSS Frameworks, Node, Express and
                MongoDB. Some of the completed projects :-
                <a
                  href="http://edunomics.in/"
                  target="_blank"
                  className="primary-text bold"
                  rel="noreferrer"
                >
                  edunomics.in
                </a>
                {" , "}
                <a
                  href="https://techedunomics.netlify.app/"
                  target="_blank"
                  className="bold primary-text"
                  rel="noreferrer"
                >
                  tech.edunomics.in
                </a>
                {" , "}
                <a
                  href="https://nikhilcomforts.netlify.app/"
                  target="_blank"
                  className="primary-text bold"
                  rel="noreferrer"
                >
                  nikhilcomforts.com
                </a>
                .
              </p>
              <li>
                <h2 className=" mt-2 primary-text">Freelancing</h2>
              </li>
              <p
                className=" bold
              "
              >
                <i>Freelance Web-Developer | April 2020 - Now </i>
              </p>
              <p>
                I began working as a Freelance Developer from April 2020, since
                then I have worked with all types of clients and businessmen,
                and helped them in creating there websites.The main motive of
                all the projects was to provide the Simple, Feasible and Cost
                Friendly Solutions for their projects. Most of the projects were
                built on HTML , CSS, JS, Jquery, Gatsby, Bootstrap, Wordpress
                and various others when needed. Some note worthy projects during
                these period are{" "}
                <a
                  href="http://littleearthfarmsandnursery.com/"
                  target="_blank"
                  className="primary-text bold"
                  rel="noreferrer"
                >
                  littleearthfarmsandnursery.com
                </a>
                {" , "}
                <a
                  href="https://theblueskyresortalibag.com/"
                  target="_blank"
                  className="primary-text bold"
                  rel="noreferrer"
                >
                  theblueskyresortalibag.com
                </a>
                {" , "}
                <a
                  href="https://yashodaclinic.com/"
                  target="_blank"
                  className="primary-text bold"
                  rel="noreferrer"
                >
                  yashodaclinic.com
                </a>
                .
              </p>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
