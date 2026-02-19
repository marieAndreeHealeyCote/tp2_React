import React from "react";

export default function CarteForfait({ forfait, onModifier, onSupprimer }) {
  return (
    <div
      id={`carte-${forfait.id}`}
      className="bg-white shadow-xl rounded-lg overflow-hidden mb-6 max-w-md mx-auto"
    >
      {/* Image depuis public/images */}
      <img
        src={`/images/${forfait.image}`} // ex: paris.webp
        alt={forfait.nom}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{forfait.nom}</h2>
        <p className="text-gray-700 mb-2">{forfait.description}</p>
        <p className="text-gray-800 font-bold mb-4">${forfait.prix}</p>
        <p className="text-sm text-gray-500 mb-4">
          Catégorie : {forfait.categorie}
        </p>
        <div className="flex justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => onModifier(forfait.id)}
          >
            Modifier
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            onClick={() => onSupprimer(forfait.id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
