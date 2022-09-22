import { Route, BrowserRouter, Link, Routes, useParams } from 'react-router-dom';
import Grids from './components/Grids';
import Basics from './components/BasicComponents';
import './App.css'
import { LifecycleTests } from './components/LifecycleTests';
import { useEffect } from 'react';
import {Utils} from '../../src/helpers/Utils';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/**@ts-ignore */}
          <Route path="/" index element={<Home />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/lifecycle" element={<LifecycleTests height='100%'/>}/>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

function Home() {
  const params = useParams();
  
  useEffect(() => { console.log(Utils.getSearchParamsAsObject(true)) }, [params]);

  return (
    <ul>
      <li><Link to="/grids">Grids</Link></li>
      <li><Link to="/basics">Basics</Link></li>
      <li><Link to="/lifecycle">Lifecycle</Link></li>
    </ul>
  )
}

export default App;