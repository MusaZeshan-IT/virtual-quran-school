import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/common/Footer';
import CourseDetails from './pages/CourseDetails';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/:courseUrlName" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;