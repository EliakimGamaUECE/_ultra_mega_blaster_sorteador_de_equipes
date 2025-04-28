// SorteioEquipes.js - Componente para sortear equipes
import { useState, useContext } from "react";
import { EquipesContext } from "./EquipesContext";

const SorteioEquipes = () => {
  const { sortearEquipes } = useContext(EquipesContext);
  const [numEquipes, setNumEquipes] = useState(2);

  return (
    <div>
      <h2>Sortear Equipes</h2>
      <input type="number" min="2" value={numEquipes} onChange={(e) => setNumEquipes(Number(e.target.value))} />
      <button onClick={() => sortearEquipes(numEquipes)}>Sortear</button>
    </div>
  );
};

export default SorteioEquipes;