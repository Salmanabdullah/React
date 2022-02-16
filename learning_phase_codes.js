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

/*Hooks must start with use
	component name must be uppercase*
	must be in the function / component body
	cannot call conditonally*/
//useState method
import React, { useState } from "react";

const UseStateBasics = () => {
	/*array destructure in useState method *it takes two arguments(value,function), convention is to name like this below*/
  const [text, setText] = useState("change the title");
  const changeTitle = () => {
    if (text === "change the title") {
      setText("hello world");
    } else {
      setText("change the title");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={changeTitle}>
        change title
      </button>
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="container">
      <UseStateBasics />
    </div>
  );
}


/**useState method on array
"../" means to get access on one directory up
onClick needs to have an arrow function otherwise it will invoke the functioin onload
array destructure
*/
import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};
function App() {
  return (
    <div className="container">
      <UseStateArray />
    </div>
  );
}