import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { AddChartButton, Header, ProductsScreen, ProductDetails, BigProductImage, BigAddChartButton, Container } from "../components/ProductsScreen"

export default function InfoProduto() {
    const { prodId } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/detalhes/${prodId}`)
            .then((res) => {
                setProduto(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.response.request.status))
    }, [])
    return (
        <ProductsScreen>
            <Header>JoCaDa Sports</Header>
            <Container>
                <BigProductImage src={produto.imagem} />
                <ProductDetails>
                    <p>{produto.descricao}</p>
                    <p>R${produto.valor}</p>
                </ProductDetails>
                <BigAddChartButton>Adicionar ao Carrinho</BigAddChartButton>
            </Container>
        </ProductsScreen>
    )
}