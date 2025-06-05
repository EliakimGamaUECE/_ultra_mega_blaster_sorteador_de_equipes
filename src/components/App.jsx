import { useContext, useState } from "react";
import { EquipesProvider, EquipesContext } from "./EquipesContext";
import AdicionarNomes from "./AdicionarNomes"; // <- aqui está a nova importação
import "./styles.css";

const App = () => {
  const { nomes, equipes, sortearEquipes } = useContext(EquipesContext);
  const [numEquipes, setNumEquipes] = useState(2);

  return (
    <div className="main-container">
      <div className="logo-container">
        <img
          src="src/assets/logo-sorteador.png"
          alt="Logo Sorteador"
          className="logo"
        />
        <img
          src="src/assets/capacitabrasil-logo.png"
          alt="Capacita Brasil"
          className="logo-capacita"
        />
      </div>

      <header>
        <h1>Criador de Equipes & Grupos Aleatórios</h1>
        <p>
          Crie <strong style={{ color: "#111827" }}>equipes aleatórias</strong>{" "}
          automaticamente e de forma gratuita a partir de uma lista de nomes.
        </p>
      </header>

      <div className="flex-container">
        <div className="form-container">
          {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
          </div> */}
          <fieldset>
            <div className="lado-a-lado">
              <div>
                <h2>Adicionar Nomes</h2>
                <AdicionarNomes />
              </div>

              <div>
                <h2>Número de Equipes</h2>
                <label className="adicionar-nomes-label">
                  Coloque o número de equipes abaixo:
                </label>
                <input
                  style={{ marginTop: "10px" }}
                  type="number"
                  min="2"
                  value={numEquipes}
                  onChange={(e) => setNumEquipes(Number(e.target.value))}
                />
              </div>
            </div>

            <button
              style={{ marginLeft: "8px" }}
              onClick={() => sortearEquipes(numEquipes)}
            >
              Sortear
            </button>
          </fieldset>

          <h2>Nomes Adicionados</h2>
          <ul className="nomes-list">
            {nomes.length > 0 ? (
              nomes.map((n, i) => <li key={i}>{n}</li>)
            ) : (
              <p>Nenhum nome adicionado.</p>
            )}
          </ul>
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
