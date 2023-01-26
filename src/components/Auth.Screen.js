import styled from "styled-components";

export const AuthScreen = styled.div`
    width: 100vw;
    min-width: 375px;
    height: 100vh;
    min-height: 667px;
    background-color: #efd510;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-top: 15vh;
        margin-bottom: 5vh;
        font-size: 30px;
        background-color: #f2910a;
        color: white;
    }
    h2{
        margin-top: 10px;
        color: white;
        cursor: pointer;
    }
    form{
        display: flex;
        flex-direction: column;
        input{
            width: 300px;
            height: 45px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: none;
            box-sizing: border-box;
            padding: 9px;
        }
        button{
            cursor: pointer;
            width: 300px;
            height: 45px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: none;

            background-color: #f2910a;
            color: white;
        }
    }
`

export const Warning = styled.div`
    display: flex;
    color: red;
    font-size: 18px;
    h3{
        margin-left: 5px;
    }
`