import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Dropdown from "./components/Dropdown";

function App() {
  useEffect(() => {
    document.documentElement.dataset.theme =
      "theme" in localStorage
        ? localStorage.theme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar sticky top-0 shadow-lg">
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">daisyUI</span>
        </div>
        <div className="flex-none">
          <Dropdown
            items={[
              "light",
              "dark",
              "cupcake",
              "emerald",
              "corporate",
              "retro",
              "garden",
            ]}
            defaultValue={localStorage.theme}
            onChange={(itemValue) => {
              localStorage.theme = itemValue;
              document.documentElement.dataset.theme = itemValue;
            }}
          />
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
