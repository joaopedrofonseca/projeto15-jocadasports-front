import axios from "axios"
import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Context from "../components/Context"
import { Header } from "../components/ProductsScreen"
import checkout from "../assets/imgs/checkoutcart.svg"

export default function CarrinhoDeCompras() {
    const { token } = useContext(Context)
    const [produtos, setProdutos] = useState([])
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const URL = `${process.env.REACT_APP_API_URL}/carrinho`
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config)
        promise.then((res) => {
            setProdutos(res.data)
        })
        promise.catch((err) => {
            alert("algo deu errado..")
        })

        let valor = 0

        produtos.map((item) => {
            return valor += parseFloat(item.valor)
        })

        setTotal(valor)

    }, [produtos])

    function finalizarPedido () {
        navigate("/checkout")
    }

    return (
        <ContainerCarrinho>
            <Header>JoCaDa Sports</Header>
            <ContainerProdutos>
                {produtos.map((item) => (
                    <MeusProdutos>
                        <img src={item.imagem} />
                        <Nome>
                            <p>{item.nome}</p>
                            <h1>{`R$${item.valor}`}</h1>
                        </Nome>
                    </MeusProdutos>
                ))}
            </ContainerProdutos>
            <Rodape>
                <Total>
                    <p>{`Valor total: `}</p>
                    <h1>{`R$${total}`}</h1>
                </Total>
                <CheckoutButton onClick={finalizarPedido}>
                    <img src={checkout} alt="finalizar pedido" />
                    <h2>
                        {"Finalizar compra"}
                    </h2>
                </CheckoutButton>
            </Rodape>
        </ContainerCarrinho>
    )
}

{/*styled components*/ }

const Total = styled.div`
display: flex;
height: 100%;
align-items: center;
`

const CheckoutButton = styled.div`
height: 70px;
width: 170px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-right: 20px;
cursor: pointer;
img{
    height: 35px;
}
h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
}
`

const Nome = styled.div`
height: 70px;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 30px;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
}
h1{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
}
`

const ContainerProdutos = styled.div`
//position: relative;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
margin-top: 70px;
`

const ContainerCarrinho = styled.div`
//position: relative;
width: 100vw;
height: 100vh;
`
const MeusProdutos = styled.div`
width: 100vw;
height: 100px;
display: flex;
align-items: center;
justify-content: flex-start;
margin-bottom: 10px;
background-color: #F0E68C;
border-radius: 20px;
img {
    height: 70px;
    margin-left: 20px;
}
`

const Rodape = styled.div`
position: absolute;
bottom: 0px;
width: 100vw;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #FFC300;
border-radius: 15px;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-left: 20px;
}
h1{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-left: 8px;
}
`