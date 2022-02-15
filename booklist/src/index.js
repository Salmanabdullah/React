import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './books'
import {Book} from './Book'


const Booklist = () => {
  return (
      <section className='booklist'>
        {books.map(item =>{
          return <Book key={item.id} {...item}/>
        })}
      </section>
  );
}




ReactDOM.render(<Booklist/>, document.getElementById('root'));

