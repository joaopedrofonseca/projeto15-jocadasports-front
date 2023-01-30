import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Context from "../components/Context"

export default function DadosPagamento() {
    const { token, produtos} = useContext(Context)
    const [nomeCartao, setNomeCartao] = useState("")
    const [numeroCartao, setNumeroCartao] = useState("")
    const [numeroSegurança, setNumeroSegurança] = useState("")
    const [dataValidade, setDataValidade] = useState("")
    const navigate = useNavigate()

    function comprar (e) {
        e.preventDefault()
        const URL = `${process.env.REACT_APP_API_URL}/checkout`
        const body = {produtos, nomeCartao, numeroCartao, numeroSegurança, dataValidade}
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, body, config)
        promise.then((res) => {
            console.log(res.data)
            alert("Compra realizada com suceso")
            navigate("/produtos")
        })
        promise.catch((err) => {
            console.log(err.message)
            //alert("algo deu errado...")
        })
    }

    return (
        < ContainerFormulario >
            <form onSubmit={comprar}>
                <Input
                    type="text"
                    placeholder="Nome impresso no cartão"
                    value={nomeCartao}
                    onChange={e => setNomeCartao(e.target.value)}
                    required
                />
                <Input
                    type="number"
                    placeholder="Digitos do cartão"
                    value={numeroCartao}
                    onChange={e => setNumeroCartao(e.target.value)}
                    required
                />
                <LittleInput
                    type="number"
                    placeholder="Código de segurança"
                    value={numeroSegurança}
                    onChange={e => setNumeroSegurança(e.target.value)}
                    required
                />
                <LittleInput
                    type="text"
                    placeholder="Validade"
                    value={dataValidade}
                    onChange={e => setDataValidade(e.target.value)}
                    required
                />
                <ButtonSubscribe type="submit">
                    <h1>{"FINALIZAR PEDIDO"}</h1>
                </ButtonSubscribe>
            </form>
        </ContainerFormulario >
    )
}

{/*styled components*/ }


const ContainerFormulario = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 299px;
margin-top: 50px;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 9px;
}
`


const Input = styled.input`
width: 299px;
height: 52px;
background-color: #FFFFFF;
border-radius: 8px;
padding-left: 14px;
margin-bottom: 8px;
border: 1px solid black;
::placeholder{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #808080;
}
`

const LittleInput = styled.input`
width: 141px;
height: 52px;
background-color: #FFFFFF;
border-radius: 8px;
padding-left: 9px;
margin-bottom: 8px; ;
margin-right: 2px;
margin-left: 2px;
border: 1px solid black;
::placeholder{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #808080;
}
`

const ButtonSubscribe = styled.button`
width: 298px;
height: 52px;
background: #faff00;
border-radius: 8px;
margin-top: 8px;
border: 1px solid black;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #000000;
}
`