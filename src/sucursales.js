const fs = require("fs");

let sucursales = {
  db:"./data/theaters.json",
  titulo:"NUESTRAS SALAS! \n",
  LeerJSON:function(){
    let SalasJSON = fs.readFileSync(this.db, "utf-8");
    let salas = JSON.parse(SalasJSON);
    return salas
  },
  TotalSalas:function(){
    let salas = this.LeerJSON();
    return salas.total_theaters;
  },
  ListadoSalas:function(){
    let salas = this.LeerJSON();
    let sucursales = []
    salas.theaters.forEach(function(info){
      sucursales.push(info);
    });
    return sucursales;
  }
}

module.exports = sucursales