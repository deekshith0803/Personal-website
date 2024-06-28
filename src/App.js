import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Main from './components/pages/Main';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
