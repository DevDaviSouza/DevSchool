import db from './db.js';
import  express  from "express";
import  cors  from "cors";


const app = express();
app.use(cors());
app.use(express.json())


app.get('/matricula', async (req, resp) => {
    try {
        let alunos = await db.tb_matricula.findAll({order: [['id_matricula', 'desc']]});
       
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

app.put('/matricula/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let alterar = req.body;
        
        let r = await db.tb_matricula.update({
            nm_aluno: alterar.nome,
            nr_chamada: alterar.chamada,
            nm_curso: alterar.curso,
            nm_turma: alterar.turma
        },
            {
                where: { id_matricula: id }
            }
        );

        resp.sendStatus(200);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});



app.delete('/matricula/:Id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({ where: { id_matricula: req.params.Id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({erro: e.toString()})
    }
    
})




app.listen(process.env.PORT,
    x => console.log(`Server up at port ${process.env.PORT}`))