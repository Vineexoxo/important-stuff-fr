import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AskOutPage from './AskOutPage';
import YayPage from './YayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AskOutPage />} />
        <Route path="/yay" element={<YayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
