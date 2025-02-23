import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Patients from './pages/Patients/Patients';
import Agenda from './pages/Agenda/Agenda';
import Financial from './pages/Financial/Financial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/financial" element={<Financial />} />
      </Routes>
    </Router>
  );
}

export default App;
