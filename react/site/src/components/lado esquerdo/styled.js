import styled from 'styled-components'

const Container= styled.div`
background-color: #2B3031;
color: white;
display: flex;
flex-direction: column;
width: 300px;
height: 100vh;
`

const FaixaPreta= styled.div`
background-color: #262626;

height: 50px;
width: 300px;
color: white;
`

const Cabecalho = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 20px;
`
const BotaoGerenciamento = styled.div`
display: flex;
padding: 20px 30px;
justify-content: space-between;
`
const Alunos = styled.div`
padding: 15px 0px 15px 30px;
background-color: #ffffff;
color: black;

`


export { Container, FaixaPreta, Cabecalho, BotaoGerenciamento, Alunos };