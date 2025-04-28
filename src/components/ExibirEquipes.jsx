// ExibirEquipes.js - Exibe as equipes sorteadas
import { useContext } from "react";
import { EquipesContext } from "./EquipesContext";

const ExibirEquipes = () => {
  const { equipes } = useContext(EquipesContext);

  return (
    <div>
      <h2>Equipes Sorteadas</h2>
      {equipes.map((equipe, index) => (
        <div key={index}>
          <h3>Equipe {index + 1}</h3>
          <ul>
            {equipe.map((nome, i) => (
              <li key={i}>{nome}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExibirEquipes;
