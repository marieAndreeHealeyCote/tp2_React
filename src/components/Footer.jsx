import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Liens du site */}
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">
          Accueil
        </Link>
        <Link to="/forfaits" className="hover:underline">
          Forfaits
        </Link>
        <Link to="/apropos" className="hover:underline">
          À propos
        </Link>
      </div>

      {/* Icônes sociales */}
      <div className="flex gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/facebook.png" alt="Facebook" className="h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.png" alt="Twitter" className="h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.png" alt="Instagram" className="h-6" />
        </a>
      </div>

      {/* Texte */}
      <p className="text-sm mt-2 md:mt-0">
        &copy; 2026 Agence de Voyages Soleil
      </p>
    </footer>
  );
}
