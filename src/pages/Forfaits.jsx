import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CarteForfait from "../components/CarteForfait";
import FormulaireForfait from "../components/FormulaireForfait";

export default function Forfaits() {
  const [forfaits, setForfaits] = useState([]);
  const [forfaitAModifier, setForfaitAModifier] = useState(null);
  const formRef = useRef(null);

  const baseURL = "http://localhost:5000/forfaits";

  // Charger les forfaits depuis JSON Server
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setForfaits(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Supprimer
  const handleSupprimer = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce forfait ?")) {
      axios
        .delete(`${baseURL}/${id}`)
        .then(() => setForfaits((prev) => prev.filter((f) => f.id !== id)))
        .catch((err) => console.error(err));
    }
  };

  // Préparer la modification
  const handleModifier = (id) => {
    const f = forfaits.find((f) => f.id === id);
    setForfaitAModifier(f);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Formulaire */}
      <div ref={formRef}>
        <h1 className="text-2xl font-bold mb-4">
          Ajouter / Modifier un forfait
        </h1>
        <FormulaireForfait forfaitInitial={forfaitAModifier || {}} />
      </div>

      {/* Liste des forfaits */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-inner">
        <h2 className="text-xl font-bold mb-4">Forfaits disponibles</h2>
        {forfaits.length === 0 ? (
          <p className="text-gray-600">Aucun forfait pour l'instant.</p>
        ) : (
          forfaits.map((f) => (
            <CarteForfait
              key={f.id}
              forfait={f}
              onModifier={handleModifier}
              onSupprimer={handleSupprimer}
            />
          ))
        )}
      </div>
    </div>
  );
}
