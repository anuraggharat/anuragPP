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
        <h1 className="heading">My Works</h1>
        <p>
          Here is a list of few selected projects I have worked on till date.
          You can find more of them on {"  "}
          <a target="_blank" href="https://github/anuraggharat">
            Github
          </a>
          .
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
