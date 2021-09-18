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

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
    }

    .student-registered-box {
        display: flex;
        flex-direction: column;

        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
        margin-top: 2em;
        
    }
    .text-registered-student {
        display: flex;
        flex-direction: row;
        font-weight: bolder;
        font-size: 32px;
        padding-left: .3em;
    }

    .row-bar {
        display: flex;
        flex-direction: row;
    }

    .information-purple {
        display: flex;
        flex-direction: row;
        background: #986CDF;
        width: 1454px;
        height: 67px;
        color: #FFFFFF;
        justify-content: space-evenly;
        margin-top: 2em;
        align-items: center;
        font-size: 18px ;
        margin-bottom: 1em;
    }



    .gray{
        width: 1454px;
        height: 61.93px;
        background: #F5F5F5;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .white {
        width: 1454px;
        height: 61.93px;
        background: #FFFFFF;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        font-size: 18px;
    }

    .box-information {
        border: 1px solid #E2E2E2;
    }

    .body-right-box {
        display: flex;
        flex-direction: column;

        background-color: #F5F5F5;

        height: 100%;
        padding: 3em;
        
        margin-bottom: 0em;
        margin-right: 0em;
    }


    .reader-right-box {
        margin-top: 0em;
        padding-right: 0em;
        
    }

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
    }
    
    .box-image {
        margin-right: 2em;
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
    
    .table-user {
        border-collapse: collapse;
    }

    .linha-alternada {
        background-color: #fff;
    }

    .coluna-acao {
        width: .1em;
    }

    button {
        cursor: pointer;
    }

    .button-create button:hover {
        background-color: #aa3997;
        transition: 2s;
    }

    img {
        cursor: pointer;
    }

    .absolute {
        color: white;
        background-color: #DB21BD;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
    }

    .user-image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        border-radius: 50%;
        
    }

    .user-image img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
        height: 57px;
        
    }
`

export { Container }