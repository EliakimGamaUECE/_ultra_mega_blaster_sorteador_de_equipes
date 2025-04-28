// EquipesContext.js - Contexto para armazenar os nomes e equipes
import { createContext, useState } from "react";

export const EquipesContext = createContext();

export const EquipesProvider = ({ children }) => {
  const [nomes, setNomes] = useState([]);
  const [equipes, setEquipes] = useState([]);

  const adicionarNome = (nome) => {
    setNomes((prev) => [...prev, nome]);
  };

  const sortearEquipes = (numEquipes) => {
    if (nomes.length < numEquipes) return;
    const shuffled = [...nomes].sort(() => 0.5 - Math.random());
    const novasEquipes = Array.from({ length: numEquipes }, () => []);
    shuffled.forEach((nome, index) => {
      novasEquipes[index % numEquipes].push(nome);
    });
    setEquipes(novasEquipes);
  };

  const novoSorteio = () => {
    setEquipes([]);
    setNomes([]);
  };

  return (
    <EquipesContext.Provider value={{ nomes, adicionarNome, equipes, sortearEquipes, novoSorteio }}>
      {children}
    </EquipesContext.Provider>
  );
};