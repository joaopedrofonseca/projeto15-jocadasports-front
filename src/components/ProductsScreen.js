import styled from "styled-components";

export const ProductsScreen = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Header = styled.div`
    width: 98%;
    height: 50px;
    background-color: #faff00;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 5px;
    margin-left: 1%;
    margin-bottom: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Unbounded', cursive;
    font-weight: 700;
    font-size: 25px;
    img{
        position: absolute;
        width: 30px;
        right: 30px; 
        cursor: pointer;
    }
`

export const ProductWindow = styled.div`
    width: 95%;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 15px;
    padding: 15px;
`

export const ProductImage = styled.img`
    width: 237px;
    border-radius: 10px;
    margin-left: 15px;
   
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
    font-size: 12px;
    font-family: 'Unbounded', cursive;
    font-weight: 200;
`

export const AddChartButton = styled.button`
    width: 120px;
    height: 20px;
    background-color: #faff00;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`

export const ProductDetails = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 30px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        margin-top: 15px;
    }
`

export const BigProductImage = styled.img`
    width: 80vw;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 20px;
`

export const BigAddChartButton = styled.button`
    width: 220px;
    height: 40px;
    background-color: #faff00;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`