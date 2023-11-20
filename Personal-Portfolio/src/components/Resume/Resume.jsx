import { useState } from "react";
import "./Resume.css";


export function Resume() {
  const [state, setState] = useState(false)

  function handleChange() {
if (state) {
  setState(false)
} else {
   setState(true)
}
  }
  

  if (!state) {
    return (
      <div className="resume-container" id="resume">
      <h1 className="h1">Resume</h1>

      <div className="button-grp">
        <button><a className="resume-download" href="./src/media/Javier Burgara Resume.pdf" download>Download</a></button>
        
        <button onClick={handleChange} className="view-in">View in page</button>
      </div>
      </div>
    )
  } else {
     return (
    <div className="resume-container">
      <h1 className="h1">Resume</h1>

      <button onClick={handleChange}>Reset</button>

      <object data="./src/media/Javier Burgara Resume.pdf" type="application/pdf" width="50%" height="750px">

      <p>Unable to display PDF file. 
        <a href="./src/media/Javier Burgara Resume.pdf">Download</a> instead.
        </p>  
        </object>
    </div>
  );
  }
 
}
