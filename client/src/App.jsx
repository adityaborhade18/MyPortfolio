import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './page/Home';
import Layout from './layout/Layout';
import About from './page/About';
import Projects from './page/Project';
import Skills from './page/Skills';
import Contact from './page/Contact';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
      </Routes>
   
  );
}

export default App;
