// AdicionarNomes.js - Componente para adicionar nomes
import { useState, useContext } from "react";
import { EquipesContext } from "./EquipesContext";

const AdicionarNomes = () => {
  const { adicionarNome } = useContext(EquipesContext);
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === "") return;
    adicionarNome(nome);
    setNome("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite um nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <button type="submit">Adicionar Nome</button>
    </form>
  );
};

export default AdicionarNomes;