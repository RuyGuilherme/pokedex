const express = require('express');
const app = express('app');
const port = process.env.PORT || 3000;
const  path  =  require( 'path' ) ;


let pokedex = [];

let message = "";

const pokemon = [
  {
  Número:004, 
  nome:"Charmander", 
  tipo: "Fogo", 
  imagem: "", 
  Descrição:"Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.", 
  Altura:"0,6 m", 
  Peso:"8,5 kg", 
  Categoria:"Lagarto", 
  Habilidade:"Chama"
 },
 {
  Número:002, 
  nome:"Ivysaur", 
  tipo: "Grama", 
  imagem: "", 
  Descrição:"Quando o bulbo em suas costas fica grande, ele parece perder a capacidade de ficar em pé sobre as patas traseiras.", 
  Altura:"1,0 m", 
  Peso:"13,0 kg", 
  Categoria:"Overgrow", 
  Habilidade:"Chama"
 },
 {
  Número:025, 
  nome:"Pikachu", 
  tipo: "Elétrico", 
  imagem: "", 
  Descrição:"Os pikachu, que podem gerar eletricidade poderosa, têm bolsas nas bochechas que são extremamente macias e super elásticas.", 
  Altura:"0,4 m", 
  Peso:"6,0 kg", 
  Categoria:"Mouse", 
  Habilidade:"Elétrica" 
 }
];

app.use(express.urlencoded());

app.get("/view/detalhes.ejs", (req, res) =>{
  res.render("detalhes")
});

app.get("/view/cadastro.ejs", (req, res) => {
  res.render("cadastro");
});

app.post("/views/index.ejs/new", (req, res) => {
    
    const { nome, tipo, imagem } = req.body;

    let pokemon = {Número: "numero", nome: "nome", tipo: "tipo", imagem: "imagem", Descrição:"descricao", Altura:"altura", Peso:"peso" , Categoria:"categoria", Habilidade:"habilidade"};
    
    message = `Parabéns, sua inscrição foi realizada com sucesso!`;
    
    pokedex.push(pokemon);
    
    res.redirect("/")

    setTimeout(() => {
      message = "";
    }, 1500);

    res.render("index", {
      titulo: "Pokedéx",
      pokedex,
      analyticsList: analyticsList,
      message,
    });

  })

  
