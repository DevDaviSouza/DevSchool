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
    font: 32px roboto-bold;
}

.registrar{
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
    font: 18px roboto-regular;
}

.inputs-1{
   margin-left: 20px;
   margin-top: 30px;
}

.inputs-2 {
   margin-left: 70px;
   padding-top: 20px;
   
   
}

.inputs-2 :nth-child(1){
    margin-bottom: 10px;
    margin-left: 5px;
}
.inputs-1 :nth-child(1){
margin-bottom: 10px;
margin-left: 30px;

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
    margin-left: 60px;
    margin-top: 85px;
    font: 14px roboto-medium;
    cursor: pointer;
}

.lista-alunos{
    margin: 40px 50px 20px 50px;
    background-color: #ffffff;
}

.categorias{
    background-color: #986CDF;
    color: #ffffff;
    font: 18px Roboto-medium;
}

.categorias :nth-child(3){
    background-color: #986CDF;
    color: #ffffff;
    margin-left: 100px;
}

.lista{
    margin-top: 20px;
}

thead {
        background-color: #986CDF;
    }
    table {
        margin-top: 2em;
    }
    tbody {
        background-color: #F5F5F5;
    }
    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }
    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    }
    .tabela {
        border-collapse: collapse;;
    }

    .alunos-cadastrados {
        
    }

    .categorias :nth-child(3){
        padding-left: 250px;
    }


    .categorias :nth-child(5){
        padding-left: 50px;
        padding-right: 100px;
    }
    .tabela{
        padding-left: 50px;
    }

    tr{
        padding-right: 100px;
    }
`

export { Container }