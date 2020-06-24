const fs = require("fs")

let enCartelera = {
  db: "./data/movies.json",
  titulo:"PELICULAS EN CARTELERA!\n",

  leerJSON:function(){
    let moviesJSON = fs.readFileSync(this.db,"utf-8");
    let movies = JSON.parse(moviesJSON);
    return movies
  },
  TotalPelis:function(){
    return this.leerJSON().total_movies;
  },
  Listado:function(){
    let PyRs = this.leerJSON();
    let Listar = [];
    PyRs.movies.forEach(function(PyR){
      Listar.push(PyR)
    });
    return Listar
  }
}

module.exports = enCartelera