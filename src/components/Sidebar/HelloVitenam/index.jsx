import React from 'react'
import "./style.css";
const index = (props) => {
  return (
    <div className='resultSearchWiki'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.seen}</p>
    </div>
  );
}

export default index