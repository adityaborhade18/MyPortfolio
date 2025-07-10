import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './page/Home';
import Layout from './layout/Layout';
import About from './page/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
