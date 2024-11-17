import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products  from './Pages/Product';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
