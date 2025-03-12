
import axios from 'axios'
import { join, basename, dirname } from "path"
import * as path from 'path'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { fileURLToPath } from 'url';
const { token } = process.env
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser"
const PORT = process.env.PORT || 3001
const app = express()


app.use(cors());
app.use(express.json());
app.use(
	cors({ 
		exposedHeaders: [
			'Authorization'
		]
	}),
	bodyParser.json(),
	bodyParser.urlencoded({
		extended: true
	}),
	express.static(path.join(__dirname, '/interface'))
);

app.use((req, res, next) => {
    const filePath = path.join(__dirname, "interface", `${req.path}.html`);
    res.sendFile(filePath, (err) => {
        if (err) next(); // Continua para a próxima rota se não encontrar o arquivo
    });
});

app.get('/src',function(req,res) {
	const required = req.query.id
	const format = req.query.format


	res.sendFile(__dirname + `/src/${required}.${format}`)
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/interface'));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./interface/index.html"));
});
app.get("/plataforma", (req, res) => {
	res.sendFile(path.join(__dirname, "./interface/plataforma.html"));
});

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando em http://127.0.0.1:${PORT}`);
});