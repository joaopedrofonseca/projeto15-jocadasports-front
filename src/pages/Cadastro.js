import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthScreen, Warning } from "../components/Auth.Screen"
import { BeatLoader } from "react-spinners"


export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [endereço, setEndereço] = useState('')
    const [erro, setErro] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function cadastrar(event) {
        event.preventDefault()
        setLoading(true)
        const body = { nome, email, senha, confirmarSenha, endereço }
        axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, body)
            .then(res => { 
                navigate("/")
                setLoading(false)
                setErro(undefined)})
            .catch(err => {
                setErro(err.response.request.status)
                setLoading(false)})
    }


    return (
        <AuthScreen>
            <h1>Jocada Sports</h1>
            <form onSubmit={cadastrar}>
                <input placeholder="nome" type="string" value={nome} onChange={e => setNome(e.target.value)} required disabled={loading}></input>
                <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required disabled={loading}></input>
                <input placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required disabled={loading}></input>
                <input placeholder="confirmar senha" type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} required disabled={loading}></input>
                <input placeholder="endereço" type="string" value={endereço} onChange={e => setEndereço(e.target.value)} required disabled={loading}></input>
                <button type="submit">{loading? <BeatLoader color="white" size={7} /> : "Cadastrar"}</button>
            </form>
            {erro  &&
                <Warning>
                    <ion-icon name="alert-circle-outline"></ion-icon><h3>Email/senha inválidos</h3>
                </Warning>
            }
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h2>Já tem uma conta? Clique aqui e faça login</h2>
            </Link>
        </AuthScreen>
    )
}