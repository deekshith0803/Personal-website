import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
