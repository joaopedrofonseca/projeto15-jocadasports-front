import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import InfoProduto from "./pages/InfoProduto";


function App() {
  const [token, setToken] = useState(undefined)

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Login setToken={setToken}/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/> */}
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/detalhes/:prodId" element={<InfoProduto />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
