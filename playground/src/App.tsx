import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import DataList from './components/DataList';
import Basics from './components/BasicComponents';
import './App.css'
import { LifecycleTests } from './components/LifecycleTests';
import { initializeIcons } from '@fluentui/react';

initializeIcons();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/**@ts-ignore */}
          <Route path="/" index element={<Home />} />
          <Route path="/grids" element={<DataList />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/lifecycle" element={<LifecycleTests height='100%'/>}/>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

function Home() {  
  return (
    <ul>
      <li><Link to="/grids">DataList</Link></li>
      <li><Link to="/basics">Basics</Link></li>
      <li><Link to="/lifecycle">Lifecycle</Link></li>
    </ul>
  )
}

export default App;