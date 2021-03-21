import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import api from "./services/api";
function App() {

  let msg = "Hello World"
  const [state, setState] = useState(null)
  async function getData (){
    const url = 'processInfo/Result/all/';
    const response = await fetch(url);
    const data =  (await api.get(url)).data
    console.log(data)
    return  data[0]["NomeUJPrincipalProcesso"]

  }

  getData().then(r => setState(r))


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { state }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
