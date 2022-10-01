import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
