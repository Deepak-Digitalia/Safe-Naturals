
import './App.css';
import  Navbar from "./components/mynavbar.js";
import Footer from './components/footer.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './layouts/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './layouts/login.js';
function App() {
  return (
    <div>
    
    
    <Router>
    <Navbar/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/HomePage" element={<HomePage />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
