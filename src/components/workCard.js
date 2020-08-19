import React from "react"

export default function WorkCard({ work }) {
  return (
    <div className="workcard p-0">
      <a
        href={work.link}
        target="_blank"
        className="p-0 w-100"
        rel="noreferrer"
      >
        <img src={work.imgId} className="work-image" alt="work" />
      </a>
      <div className="row">
        <a href={work.link} target="_blank" rel="noreferrer">
          <h2 className="sub-heading primary-text">{work.title}</h2>
        </a>
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
