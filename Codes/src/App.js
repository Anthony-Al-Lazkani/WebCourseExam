import React from 'react';
import { Route, Routes, BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { useEffect } from 'react';
import './LeaveRequest/LeaveRequest.css';
import './LeaveRequest/LeaveRequest';
import LeaveRequest from './LeaveRequest/LeaveRequest';


function App() { 
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LeaveRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
