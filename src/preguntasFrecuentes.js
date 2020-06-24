const fs = require("fs");

let faqs ={
  db:"./data/faqs.json",
  titulo:"PREGUNTAS FRECUENTES! \n",
  leerJSON:function(){
    let faqsJSON = fs.readFileSync(this.db, "utf-8");
    let faqs = JSON.parse(faqsJSON);
    return faqs
  },
  Total:function(){
    let faqs = this.leerJSON();
    return faqs.total_faqs;
  },
  Mostrar:function(){
    let faq = this.leerJSON();
    let Arrayfaqs =[] 
    faq.faqs.forEach(function(FyQ){
      Arrayfaqs.push(FyQ);
    });
    return Arrayfaqs
  }
}

module.exports = faqs