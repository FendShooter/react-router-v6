import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Courses from './pages/Courses';
import Bundlers from './pages/Bundlers';
import Dashboard from './pages/Dashboard';
import CurrentCourse from './pages/CuurentCourse';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* redirect user to specific route by using Navigate hoock */}
        <Route path='/myapps' element={<Navigate to='/learn' />} />
        {/* Nested routes */}
        <Route path='/learn' element={<Learn />}>
          <Route path='courses' element={<Courses />}>
            <Route path=':courseid' element={<CurrentCourse />} />
          </Route>
          <Route path='bundler' element={<Bundlers />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
