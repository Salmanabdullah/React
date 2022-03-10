import React from 'react';
import Review from './review';
import './index.css';

function App() {
  return (
    <>
    <section>
      <div>
        <h2>Our Reviews</h2>
        <div className='underline'></div>
      </div>
      <Review/>
    </section>
    </>
  );
}

export default App;
