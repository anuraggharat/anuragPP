import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { works } from "../Data/work"

import WorkCard from "../components/workCard"
const IndexPage = () => (
  <Layout>
    <SEO title="Works" />
    <div className="container">
      <div className="works">
        <h1
          className="heading"
          data-sal="slide-down"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          My Works
        </h1>
        <p data-sal="slide-down" data-sal-delay="400" data-sal-easing="ease">
          Here's a list of few selected projects I have created till date. You
          can find more of them on {"  "}
          <a
            target="_blank"
            className="primary-text bold"
            href="https://github/anuraggharat"
            rel="noreferrer"
          >
            Github
          </a>
          .Also check my{" "}
          <a
            target="_blank"
            className="primary-text bold"
            href="https://dribbble.com/anurag_gharat"
            rel="noreferrer"
          >
            Dribble
          </a>{" "}
          account for UI that I created in my free time.
        </p>
        <div>
          {works.map(item => (
            <WorkCard key={item.id} work={item} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
