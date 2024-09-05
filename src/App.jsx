import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage';
import CourseDetails from './pages/courses/CourseDetailsPage';
import CoursesPage from './pages/courses/CoursesPage';
import Checkout from './pages/CheckoutPage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/blog/BlogPage';
import BlogDetailPage from './pages/blog/BlogDetailPage';
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseUrlName" element={<CourseDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;