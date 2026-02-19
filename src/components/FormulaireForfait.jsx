import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormulaireForfait({ forfaitInitial = {} }) {
  const [id, setId] = useState(forfaitInitial.id || "");
  const [nom, setNom] = useState(forfaitInitial.nom || "");
  const [description, setDescription] = useState(
    forfaitInitial.description || "",
  );
  const [prix, setPrix] = useState(forfaitInitial.prix || "");
  const [destination, setDestination] = useState(
    forfaitInitial.destination || "",
  );
  const [categorie, setCategorie] = useState(forfaitInitial.categorie || "");
  const baseURL = "http://localhost:5000/forfaits";

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
    setId(forfaitInitial.id || "");
    setNom(forfaitInitial.nom || "");
    setDescription(forfaitInitial.description || "");
    setPrix(forfaitInitial.prix || "");
    setDestination(forfaitInitial.destination || "");
    setCategorie(forfaitInitial.categorie || "");
  }, [forfaitInitial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination) return alert("Veuillez sélectionner une destination.");
    if (!categorie) return alert("Veuillez sélectionner une catégorie.");

    const data = {
      nom: nom,
      description: description,
      prix: prix,
      destination: destination,
      categorie: categorie,
      image: `${destination.toLowerCase()}.webp`,
    };

    if (id != "") {
      axios
        .put(`${baseURL}/${id}`, data)
        .then((res) => {
          let carte = document.querySelector("#carte-" + res.data.id);
          carte.scrollIntoView({ behavior: "smooth" });
        })
        .catch((err) => console.error(err));
    } else {
      console.log("bon", id);
      axios
        .post(baseURL, data)
        .then((res) => {
          setTimeout(() => {
            let carte = document.querySelector("#liste-forfait");
            carte.scrollIntoView({ behavior: "smooth", block: "end" });
          }, 1000);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto"
    >
      <input type="hidden" value={id} onChange={(e) => setId(e.target.value)} />
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
