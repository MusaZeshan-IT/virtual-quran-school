import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/common/Footer';
import CourseDetails from './pages/CourseDetails';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { useEffect, useState } from 'react';
import Checkout from './pages/Checkout'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = localStorage.getItem('access_token');

  useEffect(() => {
    try {
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  }, [isAuthenticated]);

  return (
    <div className="app">
      <Router>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/courses/:courseUrlName" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;