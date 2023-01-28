import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { AddChartButton, Header, ProductsScreen } from "../components/ProductsScreen"

export default function InfoProduto() {
    const { prodId } = useParams()
    const [produto, setProduto] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/produtos/${prodId}`)
            .then((res) => {
                setProduto(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.response.request.status))
    }, [])
    return (
        <ProductsScreen>
            <Header>JoCaDa Sports</Header>
            {produto ? (
                produto.map((p) =>
                    <>
                        <img src={p.imagem} />
                        <p>{p.descricao}</p>
                        <AddChartButton>Adicionar ao Carrinho</AddChartButton>
                    </>
                )
            ) : ("...carregando")}
        </ProductsScreen>
    )
}