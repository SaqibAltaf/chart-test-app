import React from 'react';
import CookBookComponent from './components/cookbook/cookbook.component';
import 'bootstrap/dist/css/bootstrap.css';
import { LineChart , BarChart} from 'react-charts-d3';

function App() {
  const data = [
    { key: 'Group 1', values: [ { x: 'A', y: 23 }, { x: 'B', y: 8 } ] },
    { key: 'Group 2', values: [ { x: 'A', y: 15 }, { x: 'B', y: 37 } ] },
    ];

  return (
    <React.Fragment>
      <CookBookComponent></CookBookComponent>
      {/* Graph */}
      {/* <LineChart data={data} /> */}
      <BarChart data={data} />
    </React.Fragment>
  );
}

export default App;
