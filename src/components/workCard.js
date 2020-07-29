import React from "react"
import Travelgram from "../images/travelgram.png"

export default function WorkCard() {
  return (
    <div className="workcard m-0 p-0">
      <img src={Travelgram} className="work-image" />
      <div className="row">
        <h2>Travelgram</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4>Technologies</h4>
        <ul className=" m-0 text-wrap">
          <li className="chip">React</li>
          <li className="chip">React</li>
          <li className="chip">React</li>
          <li className="chip">React</li>
          <li className="chip">React</li>
          <li className="chip">React</li>
        </ul>
      </div>
    </div>
  )
}
