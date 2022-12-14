import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Privacy from './components/miscellaneous/Privacy';
import Careers from './components/home/Careers';
import Home from './components/home/Home';
import Navbar from './components/constants/Navbar';
import Faqs from './components/home/Faqs'
import Voyage from './components/explore/Bon-Voyage';
import Powershot from './components/explore/Powershot';
import Skill from './components/miscellaneous/Skill';
import Refund from './components/miscellaneous/Refund'
import Pricing from './components/miscellaneous/Pricing'
import Terms from './components/miscellaneous/TermsCondi';
import Explore from './components/explore/Courses';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Logout from './components/auth/logout.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Alert message="hello alert"/> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/faqs" element={<Faqs />} />

        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/voyage" element={<Voyage />} />
        <Route exact path="/powershot" element={<Powershot />} />

        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/term" element={<Terms />} />
        <Route exact path="/skill" element={<Skill />} />
        <Route exact path="/refund" element={<Refund />} />
        <Route exact path="/pricing" element={<Pricing />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
