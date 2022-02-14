import React from 'react'
import ReactDom from 'react-dom'


/* convention is capital letter for function names 
	*stateless functional component.
 * always return JSX
 * return a single element
 * div / section / article/ fragment
 * use camelcase for html attributes
 * className instead of class
 * close every element
 * formatting**/
 
function Greeting(){								
  return <h2>This is my first component</h2>;
}
/* whlie rendering, functions must be enclosed with ending tags*/
ReactDom.render(<Greeting/>, document.getElementById('root'));



/*or dynamically  i can write this way too*/
const Greeting = () => {
  return React.createElement('h1',{},'hello world')
}
ReactDom.render(<Greeting/>, document.getElementById('root'));


/*React.Fragment or shortcut is "<>" can be used */
function Greeting (){
  return (
    <React.Fragment>
    <div>
      <h1>Hello world</h1>
    </div>
    </React.Fragment>
  )
}
ReactDom.render(<Greeting/>, document.getElementById('root'))


//Nested components
function Greeting (){
  return (
    <div>
      <h1>Hello world</h1>
      <p>This is me</p>
    </div>
  )
}
ReactDom.render(<Greeting/>, document.getElementById('root'));
// i can nest every tag this way. as many as i want.
// on chrome dev tools install react extension and check the components
function Greeting (){
  return (
    <div>
      <Heading/>
      <Person/>
    </div>
  );
}
const Heading = () => <h1>Hello world</h1>;
const Person = () => <p>This is me</p>;
ReactDom.render(<Greeting/>, document.getElementById('root'));


