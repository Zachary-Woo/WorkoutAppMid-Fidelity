import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cell from './cellphone/Cell';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Cell />} /> {/* This is the default route. */}
          <Route path="/cell" element={<Cell />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;