import React from 'react'

export default function about() {
    return (
        <Layout>
    <SEO title="About Me" />
    <div className="container">
      <div className="home">
        <div className="col-lg-6">
        <h1>Hey There! I am Anurag!</h1>
        <h2>A Front-End Designer and Developer based in Mumbai!</h2>
        <h2>Currently Looking projects and Internships to work on!</h2>
        <p>Want to get in touch?Contact me here!</p>
        <p>Facebook Instagram Snapchat</p>
        </div>
        <div className="col-lg-6">
          <img src={Anurag} width="200" height="200px"></img>
        </div>
      </div>
    </div>    



  </Layout>
    )
}
