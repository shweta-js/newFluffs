import React from 'react'
import "./Settings.css"
const Settings = () => {
    const [summary, setSummary] = React.useState('')
    function handleSubmit(e) {
        e.preventDefault();    console.log('You clicked submit.');
      }
  return (
    <div className="settings">
        <h4 className="setting-heading">See you soon</h4>
        <form onSubmit={handleSubmit}>
      <button  className="logout-submit">Logout</button>
    </form>
        
    </div>
  )
}

export default Settings
