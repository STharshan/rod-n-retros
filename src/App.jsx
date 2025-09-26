import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Respray from "./pages/Service/Respray";
import Restoration from "./pages/Service/Restoration";
import Touch from "./pages/Service/Touch";
import Welding from "./pages/Service/Welding";
import Repair from "./pages/Service/Repair";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/bare-metal-resprays" element={<Respray />} />
        <Route path="/services/full-restorations" element={<Restoration />} />
        <Route path="/services/touch-ups" element={<Touch />} />
        <Route path="/services/welding-fabrication" element={<Welding />} />
        <Route path="/services/fiberglass-repairs" element={<Repair />} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
