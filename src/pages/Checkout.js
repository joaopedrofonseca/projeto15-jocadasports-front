import { useContext } from "react"
import styled from "styled-components"
import Context from "../components/Context"
import { Header } from "../components/ProductsScreen"
import shoppingcart from "../assets/imgs/shoppingcart.svg"
import { useNavigate } from "react-router-dom"
import DadosPagamento from "../components/formularioPagamento"

export default function Comprar() {
    const { produtos, total } = useContext(Context)
    const navigate = useNavigate()

    function irAoCarrinho() {
        navigate("/carrinho")
    }

    return (
        <ContainerCheckout>
            <Header>
                {"JoCaDa Sports"}
                <img onClick={irAoCarrinho} src={shoppingcart} alt="carrinho de compras" />
            </Header>
            <Confirmação>
                <p>{"Insira seus dados de pagamento para concluir a compra dos seguintes itens:"}</p>
                {produtos.map((item) => (
                    <>
                        <h1>{item.nome}</h1>
                        <h2>{`R$${item.valor}`}</h2>
                    </>
                ))}
                <h3>{`Total: R$${total}`}</h3>
            </Confirmação>
            <DadosPagamento/>
        </ContainerCheckout>
    )
}

{/*styled components*/ }

const Confirmação = styled.div`
width: 98%;
//height: auto;
//min-height: 70px;
//max-height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
margin-top: 70px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
background-color: #DCDCDC;
border-radius: 10px;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 15px;
}
h1{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 7px;
}
h2{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
}
`

const ContainerCheckout = styled.div`
width: 100vw;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`