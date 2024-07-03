import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Main from './components/pages/Main';
import Nav from './components/navbar/Nav';
import './components/Footer/Footer'
import Footer from './components/Footer/Footer';

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
      {/* <Footer/> */}
    </div>
  );
}

export default App;
