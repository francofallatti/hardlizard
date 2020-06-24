const fs = require("fs");

let masVotadas ={
  db: "./data/movies.json",
  titulo:"MAS VOTADAS! \n",
  LeerJSON:function(){
    let moviesJSON = fs.readFileSync(this.db, "utf-8");
    let movies = JSON.parse(moviesJSON);
    return movies
  },
  MasVotadas:function(){
    let pelis = this.LeerJSON();
    let ArrayVotadas = [];
    pelis.movies.forEach(function(voto){
      if(voto.vote_average>=7){
        ArrayVotadas.push(voto.movies);
      }
    });
    //console.log(ArrayVotadas);
    return ArrayVotadas
  },
  Rancking:function(){
    let rancking = this.LeerJSON();
    let cont = 0;
    let cantpelis= this.MasVotadas().length;
    rancking.movies.forEach(function(voto){
      if(voto.vote_average>=7){
        cont+=voto.vote_average;
      }
    });
    return cont/cantpelis ;
    
  },
  Lista:function(){
    let pelis = this.LeerJSON();
    let Array = [];
    pelis.movies.forEach(function(voto){
      if(voto.vote_average>=7){
        Array.push(voto);
      }
    });
    return Array
  },
}

module.exports = masVotadas