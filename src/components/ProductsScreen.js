import styled from "styled-components";

export const ProductsScreen = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: white;
`

export const Header = styled.div`
    width: 98vw;
    height: 50px;
    background-color: #faff00;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Unbounded', cursive;
    font-size: 25px;
`

export const ProductWindow = styled.div`
    width: 98vw;
    height: 250px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 5px;
`

export const ProductImage = styled.img`
    width: 40vw;
    border-radius: 10px;
   
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
    font-size: 12px;
    font-family: 'Unbounded', cursive;
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
`