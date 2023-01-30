import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./components/Context"
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import InfoProduto from "./pages/InfoProduto";
import Carrinho from "./pages/Carrinho"
import Checkout from "./pages/Checkout"


function App() {
  const [produtos, setProdutos] = useState([])
  const [total, setTotal] = useState(0)
  const tokenLocalStorage = localStorage.getItem("token")
  const [token, setToken] = useState(tokenLocalStorage)

  function persistirToken(token) {
    setToken(token)
    localStorage.setItem("token", token)
  }

  return (
    <Context.Provider value={{ token, setToken, persistirToken, produtos, setProdutos, total, setTotal }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/detalhes/:prodId" element={<InfoProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
