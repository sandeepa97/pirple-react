import React from 'react';

function App() {
  return(
    <div>
      <div>This is JSX</div>
      <h1 title = "This is the JSX Method">Heading JSX</h1>
      <p id = "para1">This is a Paragraph</p>
      <p className = "para2">This is 2nd Paragraph</p>
      <div>
        <label htmlFor="input1">Some Data</label>
        <input id="input1" name="input1"></input>
      </div>
    </div>
  )

  // return React.createElement("h1",{title: "This is the Heading"},"Heading")
}

export default App;