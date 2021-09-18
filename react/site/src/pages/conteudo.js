import LadoEsquerdo from "../components/lado esquerdo/ladoesquerdo"
import CabecalhoDireito from "../components/cabeçalho lado direito/cabecalhodireito"
import Inputs from "../components/inputs/inputs"
import { Container } from "./styled"
import './conteudo.css'
import Api from "../service/api"
import { useState, useEffect } from "react"

const api = new Api()


export default function Conteudo() {
   
    const [alunos, setAlunos] = useState([])
    const [nome, setNome] = useState('')
    const [chamada, setChamada] = useState('')
    const [turma, setTurma] = useState('')
    const [curso, setCurso] = useState('')

    const listarAlunos = async () => {
        
        let Listar = await api.listar()
        console.log(Listar)
        setAlunos(Listar);
    }

    const Inserir = async () => {
        let r = await api.inserir(nome, chamada, curso, turma)

        listarAlunos()
    }
    
    useEffect(() => {
        listarAlunos()
    }, [])
    
    
    return (
    <Container>
           
        <LadoEsquerdo />
            
        <div className='ladoDireito'>
                <CabecalhoDireito />
                
                <div className="registro-alunos">
                   
                    <div className="titulo-e-barra">
                        <div className="barra"></div>
                        <div className="titulo">Novo aluno</div>
                    </div>

                    <div className="registrar">
                        <div className="inputs-1">
                            <Inputs label="Nome:" value={nome} onChange={ e => setNome(e.target.value)}/>
                            <Inputs label="Chamada:" value={chamada} onChange={ e => setChamada(e.target.value)} />
                        </div>
                        
                        <div className="inputs-2">
                            <Inputs label="Curso:" value={curso} onChange={ e => setCurso(e.target.value)} />
                            <Inputs label="Turma:" value={turma} onChange={ e => setTurma(e.target.value)} />
                        </div>
                            
                        <div className="botao" >
                             <button onClick={Inserir}> Adicionar</button>
                        </div>
                    </div>
                </div>

                <div className="student-registered-box">
                        <div className="row-bar"> 
                            <div className="bar-new-student"> </div>
                            <div className="text-registered-student"> Alunos Matriculados </div>
                        </div>
                    
                        <table className="table-user">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Nome </th>
                                    <th> Chamada </th>
                                    <th> Turma </th>
                                    <th> Curso </th>
                                    <th className="coluna-acao"> </th>
                                    <th className="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {alunos.map(item =>
                                    <tr>
                                        <td> {item.id_matricula} </td>
                                        <td> {item.nm_aluno}</td>
                                        <td> {item.nr_chamada} </td>
                                        <td> {item.nm_turma} </td>
                                        <td> {item.nm_curso} </td>
                                        <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                        <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                    </tr>
                                )}
                            </tbody> 
                        </table>
                </div>
        </div>
    </Container>
)}