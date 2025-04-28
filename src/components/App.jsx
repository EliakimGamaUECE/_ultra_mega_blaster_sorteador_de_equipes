import { useState, useContext } from "react";
import { EquipesProvider, EquipesContext } from "./EquipesContext";
import "./styles.css";

const App = () => {
  const { nomes, adicionarNome, equipes, sortearEquipes } = useContext(EquipesContext);
  const [nome, setNome] = useState("");
  const [numEquipes, setNumEquipes] = useState(2);

  const handleAdicionarNome = (e) => {
    e.preventDefault();
    if (nome.trim() === "") return;
    adicionarNome(nome);
    setNome("");
  };



  return (
    <div className="main-container">
      <h1>Ultra Mega Blaster Sorteador de Equipes</h1>

      <div className="flex-container">
        {/* Container de adicionar nomes */}
        <div className="form-container">
          <h2>Adicionar Nomes</h2>
          <form onSubmit={handleAdicionarNome} className="form">
            <input type="text" placeholder="Digite um nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <button type="submit">Adicionar Nome</button>
          </form>

          <h2>Nomes Adicionados</h2>
          <ul className="nomes-list">
            {nomes.length > 0 ? (
              nomes.map((n, i) => <li key={i}>{n}</li>)
            ) : (
              <p>Nenhum nome adicionado.</p>
            )}
          </ul>

          <h2>Número de Equipes</h2>
          <input type="number" min="2" value={numEquipes} onChange={(e) => setNumEquipes(Number(e.target.value))} />
          <button onClick={() => sortearEquipes(numEquipes)}>Sortear</button>

          
        </div>




        {/* Container de exibição das equipes sorteadas */}
        <div className="equipes-container">
          <h2>Equipes Sorteadas</h2>
          {equipes.length > 0 ? (
            equipes.map((equipe, index) => (
              <div key={index} className="equipe">
                <h3>Equipe {index + 1}</h3>
                <ul>
                  {equipe.map((nome, i) => (
                    <li key={i}>{nome}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>Nenhuma equipe sorteada ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const WrappedApp = () => (
  <EquipesProvider>
    <App />
  </EquipesProvider>
);

export default WrappedApp;
