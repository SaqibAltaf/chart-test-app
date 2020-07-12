import React from 'react';
import CookBookComponent from './components/cookbook/cookbook.component';
import 'bootstrap/dist/css/bootstrap.css';
import { LineChart , BarChart} from 'react-charts-d3';
import './App.css'
function App() {
  const data = [
    { key: 'Group 1', values: [ { x: 'A', y: 23 }, { x: 'B', y: 8 } ] },
    { key: 'Group 2', values: [ { x: 'A', y: 15 }, { x: 'B', y: 37 } ] },
    ];

  return (
    <React.Fragment>
      <div className='top'>
      <h3>Graph </h3>
        
      {/* Graph */}
      {/* <LineChart data={data} /> */}
      <BarChart data={data} />
      </div>

      <h3>Recipe Component </h3>
      <CookBookComponent></CookBookComponent>
    </React.Fragment>
  );
}

export default App;
