import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import IntroScreen from './components/IntroScreen';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme(); // Access theme to force re-render if needed or pass props

  return (
    <Router>
      <IntroScreen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
