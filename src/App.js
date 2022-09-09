import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Privacy from './components/miscellaneous/Privacy';
import Careers from './components/home/Careers';
import Terms from './components/miscellaneous/Terms';
import Home from './components/home/Home';
import Navbar from './components/constants/Navbar';
import Refund from './components/miscellaneous/Refund';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Alert message="hello alert"/> */}
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/refund" element={<Refund />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
