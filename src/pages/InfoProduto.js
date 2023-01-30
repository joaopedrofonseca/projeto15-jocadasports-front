import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { AddChartButton, Header, ProductsScreen, ProductDetails, BigProductImage, BigAddChartButton, Container } from "../components/ProductsScreen"
import shoppingcart from "../assets/imgs/shoppingcart.svg"
import Context from "../components/Context"

export default function InfoProduto() {
    const { prodId } = useParams()
    const [produto, setProduto] = useState({})
    const navigate = useNavigate()
    const { token } = useContext(Context)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/detalhes/${prodId}`)
            .then((res) => {
                setProduto(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.response.request.status))
    }, [])

    function irAoCarrinho() {
        navigate("/carrinho")
    }

    function adicionarAoCarrinho() {
        const URL = `${process.env.REACT_APP_API_URL}/carrinho`
        const body = {id: prodId}
        console.log(body)
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post(URL, body, config)
            .then((res) => {
                alert("Produto adicionado ao carrinho!")
            })
            .catch(err => console.log(err.response.request.status))
    }

    return (
        <ProductsScreen>
            <Header>
                {"JoCaDa Sports"}
                <img onClick={irAoCarrinho} src={shoppingcart} alt="carrinho de compras" />
            </Header>
            <Container>
                <BigProductImage src={produto.imagem} />
                <ProductDetails>
                    <p>{produto.descricao}</p>
                    <p>R${produto.valor}</p>
                </ProductDetails>
                <BigAddChartButton onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</BigAddChartButton>
            </Container>
        </ProductsScreen>
    )
}