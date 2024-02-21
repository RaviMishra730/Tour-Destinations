import React, { useState } from "react";
import data from './data';
import Tours from './Components/Tours'

const App = () => {
  const [tours, setTour] = useState(data);
  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTour(newTours);
  }
  if (tours.length === 0) {
    return (
      <div className="Refresh">
        <h2>No Tours Left, as you have deleted them all!!!!</h2>
        <button onClick={() =>setTour(data)}>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
};

export default App;
