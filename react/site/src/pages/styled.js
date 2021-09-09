import  styled  from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
background-color: #F5F5F5;

margin: 0%;

.registro-alunos{
    margin: 40px 50px 20px 50px;
    background-color: #ffffff;
    
}

.ladoDireito{
    border: 2px solid green;
    width: 100%;
}

.barra{
    display: flex;
    flex-direction: row;
    width: 6px;
    height: 23px;
    margin-right: 20px;

    border: none;
    background-color: #986CDF;

border-radius: 35px;
}

.titulo-e-barra{
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    align-items: center;
}

.titulo{
    font-size: 32px;
}

.registrar{
    display: flex;
    flex-direction: row;
}

.inputs-1, .inputs-2{
    
}

.inputs-1{

}

.inputs-2{
    margin-top: 10px;
}

.botao button{
    margin-left: 20px;
    border-radius: 15px;
    border: none;
    background-color: #E911C6;
    color: #ffffff;
    padding: 5px 8px;
    display: flex;
    justify-content: flex-end;
    justify-content: end;
}
`

export { Container }