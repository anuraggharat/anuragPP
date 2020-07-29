import React from "react"
import Anurag from "../images/anurag.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { work } from "../Data/work"
import WorkCard from "../components/workCard"
const IndexPage = () => (
  <Layout>
    <SEO title="Works" />
    <div className="container">
      <div className="works">
        <h1>My Works</h1>
        <p>
          Here is a list of few selected projects I have worked on till date.
          You can find more projects on Github
        </p>
        <div className="workrow">
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
