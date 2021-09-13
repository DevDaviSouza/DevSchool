import styled from 'styled-components';

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    padding: 10px 20px;
    justify-content: space-between;
    
    

    .lado-esquerdo{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .foto-usuario{
        margin-right: 15px;
    }

    .lado-direito{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .carregar img{
        width: 40px;
        height: 40px;
        margin-right: 3px;
    }

    .sair img{
        width: 40px;
        height: 44px;
    }

    .boas-vindas{
        font: 16px roboto-light;
    }
`

export {Cabecalho}