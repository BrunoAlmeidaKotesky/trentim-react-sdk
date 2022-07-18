import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import Grids from './components/Grids';
import Basics from './components/BasicComponents';
import './App.css'
import { LifecycleTests } from './components/LifecycleTests';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/**@ts-ignore */}
          <Route path="/" index element={<Home />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/lifecycle" element={<LifecycleTests height='100%' width='100%'/>}/>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

function Home() {
  return (
    <ul>
      <li><Link to="/grids">Grids</Link></li>
      <li><Link to="/basics">Basics</Link></li>
      <li><Link to="/lifecycle">Lifecycle</Link></li>
    </ul>
  )
}

export default App
