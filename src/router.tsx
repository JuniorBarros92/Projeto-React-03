import {Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './pages/Home.tsx';
import Form from './pages/Form.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Form />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;