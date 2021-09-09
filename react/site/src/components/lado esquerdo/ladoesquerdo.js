import { Container, FaixaPreta, Cabecalho, BotaoGerenciamento, Alunos } from "./styled";
import './styled.css';

export default function LadoEsquerdo() {
    return (
        <Container>
            <Cabecalho>
                <div className="imagem-logo"><img src="/assets/images/logodevschool.PNG" alt="" /></div>
                <div className="titulo-p1">Dev</div>
                <div className="titulo-p2">School</div>
            </Cabecalho>
            
            <FaixaPreta> </FaixaPreta>

            <BotaoGerenciamento>Gerenciamento <img src="/assets/images/setinhabaixa.svg" alt="" /> </BotaoGerenciamento>
        
            <Alunos> Alunos </Alunos>
         </Container>
    )
}