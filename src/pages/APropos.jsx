import React from "react";

export default function APropos() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        À propos de notre agence
      </h1>
      <p className="text-gray-700 max-w-2xl mb-6">
        Notre agence se spécialise dans la création de forfaits touristiques
        personnalisés.
      </p>
      <p className="text-gray-700 max-w-2xl mb-6">
        Avec une équipe passionnée, nous nous engageons à rendre vos voyages
        inoubliables.
      </p>
      <img
        src="/images/equipe.jpg"
        alt="Équipe de voyage"
        className="rounded-lg shadow-lg max-w-full h-64 object-cover"
      />
    </div>
  );
}
