import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/common/Footer';
import CourseDetails from './pages/CourseDetailsPage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { useEffect, useState } from 'react';
import Checkout from './pages/CheckoutPage'
import NotFoundPage from './pages/NotFoundPage'
import CoursesPage from './pages/CoursesPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseUrlName" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;