const express = require('express');
const router = express.Router();
const ejs = require('ejs');


// Get Home page
router.get('/', function (req, res, next) {
    let htm = "Daniel footer";
    let aula = { dia: 5, data: "19/10/2018", nome: "Linguagem de programação", modulo: "Primeiro modulo", hora: "20:06" };
    let arquivos = [{ link: "https://link", nome: "teoria.pdf" }, { link: "https://link", nome: "teoria.pdf" }, { link: "https://link", nome: "teoria.pdf" }];
    let chat = [{ aluno: true, mensagem: "Professor ruim" }, { aluno: false, mensagem: "Olá joão poderia nos detalhar melhor a sua insatisfação?" }]

    res.render('index', { aula: aula, arquivos: arquivos, chat: chat });
});

;

module.exports = router;