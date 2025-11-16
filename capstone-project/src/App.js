import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./layout/Nav";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import Reservation from "./components/Reservation";


function App() {
  return (
   <Router>
      <div className="site-wrapper">
        <Nav />
         <Routes>
          {/* MAIN PAGE (Home, About, Specials, Testimonials) */}
          <Route path="/" element={<Main />} />

          {/* RESERVATION PAGE */}
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
