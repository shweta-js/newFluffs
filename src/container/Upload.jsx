import React from 'react'
import "./Upload.css"
import { Textarea } from 'evergreen-ui'
import Heading from "../components/Heading"
const Upload = () => {
    const [summary, setSummary] = React.useState('')
    function handleSubmit(e) {
        // e.preventDefault();
        setSummary("")
      }
      
    return (
      <>
      <Heading data="Upload"/>
        <div className="upload">
           <div style={{
      display: 'block', width: 700, paddingLeft: 30
    }}>
     
      <Textarea
        className="text-area"
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Enter your summary of poem"
      /> <br></br>
 
      
    </div> <form onSubmit={handleSubmit}>
      <button  className="up-sty-btn"
     
      >Submit</button>
    </form>
        </div>
        </>
    )
}

export default Upload
