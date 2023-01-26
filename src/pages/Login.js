import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthScreen, Warning } from "../components/Auth.Screen"


export default function Login({setToken}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(undefined)
    const navigate = useNavigate()

    function login(e){
        e.preventDefault()
        const body = {email, senha}
        axios.post(`${process.env.REACT_APP_API_URL}/login`, body)
        .then(res => {
            //navigate("/produtos")
            setToken(res.data)
            console.log(res.data)})
        .catch(err => setErro(err.response.request.status))
    }

    return (
        <AuthScreen>
            <h1>Jocada Sports</h1>
            <form onSubmit={login}>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                <input placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required></input>
                <button type="submit">Entrar</button>
            </form>
            {erro &&
                <Warning>
                    <ion-icon name="alert-circle-outline"></ion-icon><h3>Email/senha inválidos</h3>
                </Warning>
            }
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
        </AuthScreen>


    )
}