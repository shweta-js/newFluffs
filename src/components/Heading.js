import React from 'react'
import "./Heading.css"
const Heading = (props) => {
  return (
    <h4 className='fun-heading'>{props.data}</h4>
  )
}

export default Heading