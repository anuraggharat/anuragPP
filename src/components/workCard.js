import React from "react"
import Travelgram from "../images/travelgram.png"

export default function WorkCard({ work }) {
  return (
    <div className="workcard m-0 p-0">
      <a href={work.link} target="_blank">
        <img src={Travelgram} className="work-image" alt="work" />
      </a>
      <div className="row">
        <h2>{work.title}</h2>
        <p>{work.description}</p>
        <h4>Technologies</h4>
        <ul className=" m-0 text-wrap">
          {work.technologies.map(tech => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
