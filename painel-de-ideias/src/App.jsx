import { useState } from "react";
import "./App.css"

export default function App() {
  const [input, setInput] = useState("");
  const [ideias, setIdeias] = useState([]);
  const [erro, setErro] = useState("");

  function adicionarIdeia(e) {
    e.preventDefault();

    if (input.trim() === "") {
      setErro("Digite sua ideia antes de adicionar!!!");
      return;
    }
    const novaIdeia = {
      id: Date.now(),
      texto: input,
      feita: false,
    };
    setIdeias([...ideias, novaIdeia]);
    setInput("");
    setErro("");
  }
  function toggleFeita(id) {
    const novaLista = ideias.map((item) =>
      item.id === id ? { ...item, feita: !item.feita } : item
    );
    setIdeias(novaLista);
  }

  function removerIdeia(id) {
    const novaLista = ideias.filter((item) => item.id !== id);
    setIdeias(novaLista);
  }
  const total = ideias.length;
  const concluidas = ideias.filter((item) => item.feita).length;
  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Ideias</h1>
      
      <form onSubmit={adicionarIdeia}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setErro(""); 
          }}
          placeholder="Digite uma ideia"
        />
        <button type="submit">Adicionar</button>
      </form>

      {}
      <ul>
        {ideias.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => toggleFeita(item.id)}
              style={{
                cursor: "pointer",
                textDecoration: item.feita ? "line-through" : "none",
                marginRight: 10,
              }}
            >
              {item.texto}
            </span>

            <button onClick={() => removerIdeia(item.id)}>X</button>
          </li>
        ))}
      </ul>

      {}
      <footer style={{ marginTop: 20 }}>
        {total} ideias no painel • {concluidas} concluídas
      </footer>
    </div>
  );
} ;
