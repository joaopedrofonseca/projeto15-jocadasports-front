import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";


function App() {
  const [token, setToken] = useState(undefined)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setToken={setToken}/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
