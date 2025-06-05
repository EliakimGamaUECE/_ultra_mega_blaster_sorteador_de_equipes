import { useContext, useState } from "react";
import { EquipesProvider, EquipesContext } from "./EquipesContext";
import AdicionarNomes from "./AdicionarNomes"; // <- aqui está a nova importação
import "./styles.css";

const App = () => {
  const { nomes, equipes, sortearEquipes } = useContext(EquipesContext);
  const [numEquipes, setNumEquipes] = useState(2);

  return (
    <div className="main-container">
      <h1>Ultra Mega Blaster Sorteador de Equipes</h1>

      <div className="flex-container">
        <div className="form-container">
          <h2>Adicionar Nomes</h2>
          <AdicionarNomes />

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
