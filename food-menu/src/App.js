import React, { useState } from 'react';
import Categories from './categories';
import './index.css';
import items from "./data";


function App() {
  const [categories, setCategories]=useState(0)
  return (<>
    <section>
      <div>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
    </section>
  </>)
}

export default App;
