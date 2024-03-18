import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { RestClientV5 } from "bybit-api";
import { Title } from "./components/Title";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  const key = "wbfV3OWYdemUg5gUKh";
  const secret = "Diypb0bZUxu8R8JNdoOJ6r9Jy5BwlmmWt0Ah";

  const client = new RestClientV5({
    key: key,
    secret: secret,
  });

  (async () => {
    try {
      const klineResult = await client.fetchServerTime();
      console.log("klineResult: ", klineResult);
    } catch (e) {
      console.error("request failed: ", e);
    }
  })();

  return (
    <div className="container">
      <h1 className="text-red-500">Welcome to Tauri Ura</h1>
      <Title />

      <div className="row ">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
