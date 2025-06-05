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
    <form onSubmit={handleAdicionarTodos}>
      <label style={{ fontWeight: "bold", marginBottom: "5px", display: "block" }}>
        Cole os nomes abaixo (um por linha):
      </label>
      <textarea
        rows="10"
        placeholder="Ex: João\nMaria\nPedro"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />
      <button type="submit" style={{ marginTop: "10px", padding: "8px 16px", fontSize: "16px" }}>
        Adicionar Todos
      </button>
    </form>
  );
};

export default AdicionarNomes;
