import { ProductsScreen, Header, ProductWindow, ProductImage, ProductInfo } from "../components/ProductsScreen"

export default function Produtos(){
    return(
        <ProductsScreen>
            <Header>JoCaDa Sports</Header>
            <ProductWindow>
                <ProductImage src="https://imgcentauro-a.akamaihd.net/400x400/M0PSHV01/camisa-palmeiras-puma-ii-2022-feminina-img.jpg" alt="" />
                <ProductInfo>
                    <p>Nome</p>
                    <p>Valor</p>
                </ProductInfo>
            </ProductWindow>
            <ProductWindow>
                <ProductImage src="https://imgcentauro-a.akamaihd.net/400x400/975416NE/camisa-do-corinthians-iii-22-stadium-nike-masculina-img.jpg" />
            </ProductWindow>
            <ProductWindow></ProductWindow>
            <ProductWindow></ProductWindow>
            <ProductWindow></ProductWindow>
            <ProductWindow></ProductWindow>
        </ProductsScreen>
    )
}