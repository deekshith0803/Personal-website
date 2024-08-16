import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Main from './components/pages/Main';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Home' element={<Main/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
