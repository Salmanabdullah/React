import React from 'react';
import DisplayTours from './displayTour';
import tours from './tours';
import './index.css';

//use map function to map all the objects using Displaytours component
function App() {
  return (
    <article>
      <h1>our tours</h1>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return <DisplayTours key={tour.id} {...tour} />;
        })}
      </div>
    </article>
  );
}

export default App;
