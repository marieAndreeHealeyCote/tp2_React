import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex items-center justify-between">
      <Link to="/">
        <img
          src="/images/logo.png"
          alt="Logo de l'agence"
          className="h-10 w-auto"
        />
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">
          Accueil
        </Link>
        <Link to="/forfaits" className="hover:text-gray-200">
          Forfaits
        </Link>
        <Link to="/a-propos" className="hover:text-gray-200">
          À propos
        </Link>
      </div>
    </nav>
  );
}
