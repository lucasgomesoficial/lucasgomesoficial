import { useState } from "react";
import instaLogo from "./assets/insta.svg";
import twitterLogo from "./assets/twitter.svg";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://www.instagram.com/lucasgomesoficial_1/"
          target="_blank"
        >
          <img src={instaLogo} className="logo react" alt="Insta logo" />
        </a>
        <a href="https://twitter.com/lucasgomesdev" target="_blank">
          <img src={twitterLogo} className="logo react" alt="Twitter logo" />
        </a>
        <a href="https://www.linkedin.com/in/lucasgomesoficial/" target="_blank">
          <img src={linkedinLogo} className="logo react" alt="Linkedin logo" />
        </a>
        <a href="https://github.com/lucasgomesoficial" target="_blank">
          <img src={githubLogo} className="logo react" alt="Github logo" />
        </a>
      </div>
      <h1>Lucas Gomes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador {`=>`} {count}
        </button>
        <p>⚠️ Em construção ⚠️</p>
      </div>
      <p className="read-the-docs">
        "A vida é uma dança constante de emoções." - ChatGPT
      </p>
      <footer>
        Icons baixado no {" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </footer>
    </>
  );
}

export default App;
