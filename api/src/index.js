import db from './db.js';
import  express  from "express";
import  cors  from "cors";


const app = express();
app.use(cors());
app.use(express.json());


app.get('/matricula', async (req, resp) => {
    try {
        let alunos = await db.tb_matricula.findAll();
       
        resp.send(alunos);
    } catch (e) {
        resp.send( {erro: e.toString()} )
    };
});



app.post('/matricula', async (req, resp) => {
    try {
        
        let parametro = req.body;
    
    let r = await db.tb_matricula.create({
        nm_aluno: parametro.nome,
        nr_chamada: parametro.chamada,
        nm_curso: parametro.curso,
        nm_turma: parametro.turma
    });

    resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
});






app.listen(process.env.PORT,
    x => console.log(`Server up at port ${process.env.PORT}`))