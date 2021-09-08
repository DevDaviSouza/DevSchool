import { Container, faixaPreta } from "./styled"

export default function LadoEsquerdo() {
    return (
        <Container>
            <div className="cabecalho-le">
                <div className="foto-titulo-le"></div>
                <div className="titulo-p1">Dev</div>
                <div className="titulo-p2">School</div>
            </div>
            
            <faixaPreta></faixaPreta>

            <div className="botao-gerenciamento">Gerenciamento ∧</div>
        
            <div className="alunos"> Alunos </div>
         </Container>
    )
}