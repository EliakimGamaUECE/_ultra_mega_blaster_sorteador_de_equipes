// AdicionarNomes.jsx
import { useState, useContext } from "react";
import { EquipesContext } from "./EquipesContext";

const AdicionarNomes = () => {
  const { adicionarNome } = useContext(EquipesContext);
  const [entrada, setEntrada] = useState("");

  const handleAdicionarTodos = (e) => {
    e.preventDefault();
    const nomes = entrada
      .split("\n")
      .map((nome) => nome.trim())
      .filter((nome) => nome !== "");

    nomes.forEach(adicionarNome);
    setEntrada("");
  };

  return (
    <form onSubmit={handleAdicionarTodos} className="adicionar-nomes-form">
      <label className="adicionar-nomes-label">
        Cole os nomes abaixo (um por linha):
      </label>
      <textarea
        style={{ marginTop: "10px" }}
        rows="10"
        placeholder="Ex: João
    Maria
    Pedro"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        className="adicionar-nomes-textarea"
      />
      <div>
        <button type="submit" className="adicionar-nomes-btn">
          Adicionar Todos
        </button>
      </div>
    </form>
  );
};

export default AdicionarNomes;
