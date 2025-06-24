import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Products from './pages/Products';
import Itinerary from './pages/Itinerary';
import Reviews from './pages/Reviews';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/products" element={<Products />} />
         
<Route path="/search" element={<Search />} />
           <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
