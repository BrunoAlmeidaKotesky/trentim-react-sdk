import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from "react";
import { DataTable } from '../src/components/DataTable/DataTable';

declare const module: any;
let hmrUpdate: undefined | (() => void);

const Demo = (): JSX.Element => {
  const [hotRefreshCounter, setHotRefreshCounter] = useState<number>(0);
  hmrUpdate = () => setHotRefreshCounter(hotRefreshCounter + 1);
  return (
  <div style={{ 
    width: '100vw', height: '100vh', 
    backgroundColor: '#85FFBD', 
    backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)' }}>
    <div style={{ display: "grid",placeItems: "center",margin: "0 auto", height: "100%"}}>
      <div style={{
        display: "grid",
        padding: "20px",
        placeItems: "center",
        background: 'linear-gradient(90deg, #49ff5f 0%, #23b5b5 100%)',
        borderRadius: '40px',
        border: '2px solid rgba(95,95,95,0.56)'
      }}>
      <DataTable 
        columns={[{ keyName: 'name', title: 'Name' }, {keyName: 'age', title: 'Age'}, {keyName: 'desc', title: 'Description'}]}
        styles={{
          tableBodyRow: {
            specficRow: {positions: [0,4], style: {background: 'magenta'}},
            style: {background: 'lightblue'}
          },
          tableCell: {
            specificCells: 
            {keys: ['name'], style: {color: 'yellow'}, positions: [2, 3]}
          }
        }}
        ignoreKeys={['ignoreMe']}
        rows={[
          {age: 21, name: 'Bruno', ignoreMe: true},
          {age: 36, name: 'Jony', ignoreMe: true},
          {age: 23, name: 'Jean', ignoreMe: true},
          {age: 67, name: 'Robert', ignoreMe: true},
          {age: 27, name: 'July', ignoreMe: true},
          {age: 55, name: 'Carl', ignoreMe: true},
          {age: 75, name: 'Mario', ignoreMe: true},
          {age: 88, name: 'Rodney', ignoreMe: true},
        ]} />
      </div>
    </div>
  </div>);
};

ReactDOM.render(<Demo />, document.getElementById('dyna-module-root'));

// Todo: fixme: callbacks are not called, only page refresh is taking place.
if (module.hot) {
  module.hot.accept('../src', function () {
    console.log('Accepting the updated module under src');
    hmrUpdate && hmrUpdate();
  });
}
