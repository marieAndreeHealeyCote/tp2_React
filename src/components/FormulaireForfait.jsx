import React, { useState, useEffect } from "react";

export default function FormulaireForfait({ onSubmit, forfaitInitial = {} }) {
  const [nom, setNom] = useState(forfaitInitial.nom || "");
  const [description, setDescription] = useState(
    forfaitInitial.description || "",
  );
  const [prix, setPrix] = useState(forfaitInitial.prix || "");
  const [pays, setPays] = useState(forfaitInitial.pays || "");
  const [categorie, setCategorie] = useState(forfaitInitial.categorie || "");

  // Pays disponibles triés
  const paysDisponibles = [
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
    setPays(forfaitInitial.pays || "");
    setCategorie(forfaitInitial.categorie || "");
  }, [forfaitInitial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pays) return alert("Veuillez sélectionner un pays.");
    if (!categorie) return alert("Veuillez sélectionner une catégorie.");

    // Génération de l'image depuis public/images
    onSubmit({
      nom,
      description,
      prix,
      pays,
      categorie,
      image: `${pays.toLowerCase()}.webp`, // correspond à public/images/paris.webp
    });

    if (!forfaitInitial.id) {
      setNom("");
      setDescription("");
      setPrix("");
      setPays("");
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
        <label className="block font-semibold mb-1">Pays</label>
        <select
          value={pays}
          onChange={(e) => setPays(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">-- Sélectionnez un pays --</option>
          {paysDisponibles.map((p) => (
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
