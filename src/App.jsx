import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Forfaits from "./pages/Forfaits";
import APropos from "./pages/APropos";

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/forfaits" element={<Forfaits />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
      <Footer />
    </Router>
  );
}
