import React from 'react'
import './style.css'
import moment from 'moment'

export default function Topic(props) {
  return (
   <div className="topic">
     <div className="topicVote">
       <button  onClick={()=> props.voteTopic(props.topic._id,'up')}>
        <span role="img" aria-label="up">+</span>
       </button>
       <h3> {props.topic.score}</h3>
       <button onClick={()=> props.voteTopic(props.topic._id,'down')}>
         <span role="img" aria-label="up">-</span>
       </button>
     </div>
     <div className="topic_content">
       <h3 >{props.topic.title}</h3>
       <p className="content_date">Created on {moment(props.topic.published_at).format("Do MMM")}</p>
     </div>
     <div >
       <button onClick={()=> props.removeTopic(props.topic._id)}>
         <span role="img" aria-label="trash">X</span>
       </button>
     </div>
   </div>
  )
}
