import React from 'react';

import {Clscom} from './Clscom';

function App(props) {
  return (
    <div>
    <p>Hello World</p>
    <p>Hello World from other side</p>
    <p>Some props are here: {props.contentdata}</p>
    <p>Some children data of functional component: {props.children}</p>
    <h2>Nested Clscom start here</h2>
    <p><Clscom /></p>
  </div>
  )
}

export default App;