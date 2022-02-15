import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    img:'https://m.media-amazon.com/images/I/71F14G1CqBL._AC_UY218_.jpg',
    title:'Data Science for Beginners: 4 books in 1',
    author:'Andrew Park '
  },
  {
    img:'https://m.media-amazon.com/images/I/71nqa-DTIyL._AC_UY218_.jpg',
    title:'AI Crash Course',
    author:'Hadelin de Ponteves '
  },
  {
    img:'https://m.media-amazon.com/images/I/71x8gdSJVCL._AC_UY218_.jpg',
    title:'Hands-On Data Science and Python Machine Learning',
    author:'Frank Kane '
  },
  {
    img:'https://m.media-amazon.com/images/I/71pnMuhEBsL._AC_UY327_FMwebp_QL65_.jpg',
    title:'Hands-On Machine Learning with scikit-learn and Scientific Python Toolkits',
    author:'Tarek Amr '
  }
];

const Booklist = () => {
  return (
    <section>
      {books.map(item =>{
        return <Book item={item}/>
      })}
    </section> 
  );
}

function Book(props){
  const {img,title,author} = props.item;
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
}


ReactDOM.render(<Booklist/>, document.getElementById('root'));

