import LadoEsquerdo from "../components/lado esquerdo/ladoesquerdo"
import CabecalhoDireito from "../components/cabeçalho lado direito/cabecalhodireito"
import Inputs from "../components/inputs/inputs"
import { Container } from "./styled"
import './conteudo.css'
export default function Conteudo() {
    return(
    <Container>
           
        <LadoEsquerdo />
            
        <div class='ladoDireito'>
                <CabecalhoDireito />
                
                <div className="registro-alunos">
                   
                    <div className="titulo-e-barra">
                        <div className="barra"></div>
                        <div className="titulo">Novo aluno</div>
                    </div>

                    <div className="registrar">
                        <div className="inputs-1">
                            <Inputs label="Nome:" />
                            <Inputs label="Chamada:" />
                        </div>
                        
                        <div className="inputs-2">
                            <Inputs label="Curso:" />
                            <Inputs label="Turma:" />
                        </div>
                            
                        <div className="botao">
                            <button> Cadastrar</button>
                        </div>
                    </div>
                </div>

                <div className="lista-alunos">
                <div className="titulo-e-barra">
                        <div className="barra"></div>
                        <div className="titulo">Alunos matriculados</div>
                    </div>
                    
                    <div className="tabela">
                        <table className="tabela">
                            <thead>
                                <tr className="categorias">
                                    <th> ID </th>
                                    <th> Nome </th>
                                    <th className="chamada"> Chamada </th>
                                    <th> Turma </th>
                                    <th> Curso </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody className="alunos-cadatrados">
                                    
                                    <tr className>
                                        <td> </td>
                                        <td> </td>
                                        <td>  </td>
                                        <td>  </td>
                                        <td> </td>
                                        
                                    </tr>
                                
                            </tbody> 
                        </table>
                    </div>
                                    
                </div>
        </div>
    </Container>
)}