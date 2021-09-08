import LadoEsquerdo from "../components/lado esquerdo/ladoesquerdo"
import CabecalhoDireito from "../components/cabeçalho lado direito/cabecalhodireito"
import Inputs from "../components/inputs/inputs"
import { Container } from "./styled"
export default function Conteudo() {
    return(
    <Container>
           
        <LadoEsquerdo />

        <div class='lado direito'>
                <CabecalhoDireito />
                
                <div className="registro-alunos">
                    <div className="barra"></div>
                    <div className="titulo"></div>

                    <div className="inputs-1">
                        <Inputs label="Nome:" />
                        <Inputs label="Curso:" />
                    </div>
                    
                    <div className="inputs-2">
                        <Inputs label="Chamada:" />
                        <Inputs label="Turma:" />
                       
                        <div className="botao">
                            <button> Cadastrar</button>
                        </div>
                    </div>
                </div>

                <div className="lista-alunos">
                    <div className="barra"></div>
                    <div className="titulo">Alunos Matriculados</div>
                    <div className="lista">
                        <div className="identificações">
                            <div className="id-aluno"> ID </div>
                            <div className="nome-aluno"> Nome </div>
                            <div className="chamada-aluno"> Chamada </div>
                            <div className="turma-aluno"> Turma </div>
                            <div className="curso-aluno"> Curso </div>
                        </div>
                        <div className="registro"></div>
                    </div>
                </div>
        </div>
    </Container>
)}