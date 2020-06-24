const homePage = require("./homePage");
const enCartelera = require("./enCartelera");
const masVotadas = require("./masVotadas");
const sucursales = require("./sucursales");
const contacto = require("./contacto");
const preguntasFracuentes = require("./preguntasFrecuentes");
let index = {
  homePage:function(res){
    res.write("------------------------------------\n");
    res.write(homePage.titulo);
    res.write("------------------------------------\n");
    res.write('Total de películas en cartelera: ' + homePage.cantidad())
    res.write("\n")
    res.write("------------------------------------\n");
    res.write("Total de películas en cartelera: \n");
    homePage.listarPelis().forEach(function(pelis){
      res.write(pelis);
      res.write("\n");
    });
    res.write("------------------------------------\n");
    res.write("Recordá que podés visitar las secciones: ");
    res.write(
      "\n i. En Cartelera\n ii. Más Votadas\n iii. Sucursales\n iv. Contacto\n v. Preguntas Frecuentes\n")
    res.write("------------------------------------\n");  
    res.end()
  },
   enCartelera:function(res){
    res.write("------------------------------------\n");
    res.write(enCartelera.titulo);
    res.write("------------------------------------\n");
    res.write("Listados de películas: \n\n")
    let movie = enCartelera.Listado();
    movie.forEach(function(info){
      res.write("Titulo: " + info.title);
      res.write("\n");
      res.write("Reseña: " + info.overview);
      res.write("\n\n");  
    })
     res.end()
   },
   masVotadas:function(res){
    res.write("------------------------------------\n");
    res.write(masVotadas.titulo);
    res.write("------------------------------------\n");
    let MV = masVotadas.MasVotadas()
    res.write('Total de películas mas votadas: ' + MV.length);
    res.write("\n")
    res.write("------------------------------------\n");
    res.write('Ranckng promedio: ' + masVotadas.Rancking());
    res.write("\n")
    res.write("------------------------------------\n");
    res.write("Listados de películas: \n\n")
    let movie = masVotadas.Lista();
    movie.forEach(function(info){
      res.write("Titulo: " + info.title);
      res.write("\n");
      res.write("Ranckng: " + info.vote_average);
      res.write("\n");
      res.write("Reseña: " + info.overview);
      res.write("\n\n");  
    })
     res.end()
   },
  sucursales:function(res){
    res.write("------------------------------------\n");
    res.write(sucursales.titulo);
    res.write("------------------------------------\n");
    res.write('Total de salas: ' + sucursales.TotalSalas())
    res.write("\n")
    res.write("------------------------------------\n");
    let sucursal = sucursales.ListadoSalas()
    sucursal.forEach(function(info){
      res.write("Nombre: " + info.name);
      res.write("\n");
      res.write("Dirección: " + info.address);
      res.write("\n");
      res.write("Descripción: " + info.description);
      res.write("\n\n");
    })
    res.end()
  },
  contacto:function(res){
    res.write("------------------------------------\n");
    res.write(contacto.titulo);
    res.write("------------------------------------\n");
    res.write(contacto.Contenido)
    res.write("\n")
    res.write("------------------------------------\n");
    res.end()
  },
  faqs:function(res){
    res.write("------------------------------------\n");
    res.write(preguntasFracuentes.titulo);
    res.write("------------------------------------\n");
    res.write('Total de preguntas: ' + preguntasFracuentes.Total())
    res.write("\n")
    res.write("------------------------------------\n");
    res.write("Listados de preguntas: \n");
    let PF = preguntasFracuentes.Mostrar()
    PF.forEach(function(elemento){
      res.write("Pregunta: " + elemento.faq_title);
      res.write("\n");
      res.write("Respuesta: " + elemento.faq_answer);
      res.write("\n\n");
    })
    res.end()
  }
}
module.exports = index