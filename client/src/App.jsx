import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './page/Home';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more nested routes here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
