import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ProductsScreen, Header, ProductWindow, ProductImage, ProductInfo, AddChartButton, Container } from "../components/ProductsScreen"
import shoppingcart from "../assets/imgs/shoppingcart.svg"

function ProductData({ prodId, prodImg, prodName, prodPrice }) {
    return (
        <ProductWindow>
            <Link to={`/detalhes/${prodId}`}>
                <ProductImage src={prodImg} />
                <ProductInfo>
                    <p>{prodName}</p>
                    <p>R$ {prodPrice}</p>
                    <AddChartButton>Comprar</AddChartButton>
                </ProductInfo>
            </Link>
        </ProductWindow>
    )
}

export default function Produtos() {
    const [listaProdutos, setListaProdutos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/produtos`)
            .then((res) => {
                setListaProdutos(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.response.request.status))
    }, [])

    function irAoCarrinho () {
        navigate("/carrinho")
    }

    return (
        <ProductsScreen>
            <Header>
                {"JoCaDa Sports"}
                <img onClick={irAoCarrinho} src={shoppingcart} alt="carrinho de compras" />
            </Header>
            <Container>
                {listaProdutos ? (
                    listaProdutos.map((prod) =>
                        <ProductData
                            key={prod._id}
                            prodId={prod._id}
                            prodImg={prod.imagem}
                            prodName={prod.nome}
                            prodPrice={prod.valor} />
                    )
                ) : ("...carregando")}
            </Container>
        </ProductsScreen>
    )
}