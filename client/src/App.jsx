import React from 'react';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="app bg-white">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path = '/login' element = {<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
