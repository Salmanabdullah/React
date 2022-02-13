import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){							/* convention is capital letter for function names */	
  return <h2>This is my first component</h2>;
}

/* whlie rendering, functions must be enclosed with ending tags*/
ReactDom.render(<Greeting/>, document.getElementById('root'));