import React from 'react';

import {Clscom} from './Clscom';
import {Details} from './Details';

function App(props) {
  return (
    <div>
    <p>Hello World</p>
    <p>Hello World from other side</p>
    <p>Some props are here: {props.contentdata}</p>
    <p>Some children data of functional component: {props.children}</p>
    <h2>Nested Clscom start here</h2>

    <Details ram = "4GB" hdd = "500GB" processor = "i5"/>
    <Details ram = "8GB" hdd = "750GB" processor = "i7"/>
    <Details hdd = "2GB" ram = "250GB" processor = "i7"/>

    <p><Clscom classdata = "Some propos data from the class component in the App component" /></p>
  </div>
  )
}

export default App;