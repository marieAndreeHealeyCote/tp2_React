import React from "react";
import { useNavigate } from "react-router-dom";

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Bienvenue chez notre agence de voyages hors du commun
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Découvrez nos forfaits touristiques pour des expériences inoubliables et
        des destinations incroyables à travers le monde.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="hover:scale-110 transition-transform duration-300">
          <img
            onClick={() => navigate("/forfaits")}
            src="/images/kyoto.webp"
            alt="Vue sur le mont Fiji à partir de la ville de Kyoto"
            className="cursor-pointer rounded-lg shadow-lg max-w-xs h-64 object-cover "
          />
          <p>Destination Kyoto</p>
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <img
            onClick={() => navigate("/forfaits")}
            src="/images/maldives.webp"
            alt="Magnifique vue sur l'une des plages des îles Maldives"
            className="cursor-pointer rounded-lg shadow-lg max-w-xs h-64 object-cover"
          />
          <p>Destination Maldives</p>
        </div>
      </div>
    </div>
  );
}
