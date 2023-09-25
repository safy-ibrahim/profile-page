
import React from 'react'
import'./SkillsProg.css'

export default function SkillsProgs(props) {
  return (
    <div className="progress m-2 " style={{height:"35px"}}>
      <div className="progress-bar bg-secondary firstPart" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">{props.name}</div>
      <div className="progress-bar thirdPart " role="progressbar" style={{width:props.width}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  )
}