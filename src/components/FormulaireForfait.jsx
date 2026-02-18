import React, { useState, useEffect } from "react";

export default function FormulaireForfait({ onSubmit, forfaitInitial = {} }) {
  const [nom, setNom] = useState(forfaitInitial.nom || "");
  const [description, setDescription] = useState(
    forfaitInitial.description || "",
  );
  const [prix, setPrix] = useState(forfaitInitial.prix || "");
  const [destination, setDestination] = useState(
    forfaitInitial.destination || "",
  );
  const [categorie, setCategorie] = useState(forfaitInitial.categorie || "");

  // Destination disponibles triés
  const destinationDisponibles = [
    "Alaska",
    "Acores",
    "Bali",
    "Belize",
    "Bresil",
    "Costa Rica",
    "Dubai",
    "Florence",
    "Kona",
    "Kyoto",
    "Londres",
    "Maldives",
    "Paris",
  ].sort();

  const categories = ["Plage", "Culture", "Aventure", "Nature"];

  // Met à jour le formulaire si on modifie un forfait
  useEffect(() => {
    setNom(forfaitInitial.nom || "");
    setDescription(forfaitInitial.description || "");
    setPrix(forfaitInitial.prix || "");
    setDestination(forfaitInitial.destination || "");
    setCategorie(forfaitInitial.categorie || "");
  }, [forfaitInitial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination) return alert("Veuillez sélectionner un destination.");
    if (!categorie) return alert("Veuillez sélectionner une catégorie.");

    // Génération de l'image depuis public/images
    onSubmit({
      nom,
      description,
      prix,
      destination,
      categorie,
      image: `${destination.toLowerCase()}.webp`, // correspond à public/images/paris.webp
    });

    if (!forfaitInitial.id) {
      setNom("");
      setDescription("");
      setPrix("");
      setDestination("");
      setCategorie("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto"
    >
      <div className="mb-4">
        <label className="block font-semibold mb-1">Nom du forfait</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Prix ($)</label>
        <input
          type="number"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Destination</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">-- Sélectionnez un destination --</option>
          {destinationDisponibles.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Catégorie</label>
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">-- Sélectionnez une catégorie --</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Enregistrer
      </button>
    </form>
  );
}
