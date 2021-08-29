import React from 'react';

function App() {
  var style1 = {
    color: "blue",
    fontSize: 30,
    backgroundColor: "orange"
  }

  var var1 = "Hello World";
  var var2 = 5 + 7;
  var var3 = 29;

  var func1 = function func1() {
    console.log("Some kind of Function!");
  }
  var func2 = function func2() {
    console.log("Some new kind of function");
  }

  return (
    <div>
      <div>This is JSX</div>
      <h1 style = {style1} title = "This is the JSX Method">Heading JSX Method</h1>
      <p id = "para1">This is a Paragraph</p>
      <p className = "para2">This is 2nd Paragraph</p>

      <p>{var1 + var2}</p>
      <p>{6 * 8}</p>
      <p>{var3 !== 19 ? "True" : "False"}</p>
      <div>
        <label htmlFor="input1">Some Data</label>
        <input id="input1" name="input1"></input>
      </div>

      <button onClick={func1}>Click me!</button>
      <button onMouseEnter={func2}>Click me!</button>
    </div>
  )

}

export default App;