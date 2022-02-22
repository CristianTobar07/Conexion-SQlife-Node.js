
const { text } = require('express');
const expres = require('express');
const aplicacion = expres();

aplicacion.set('view engine', 'ejs');

aplicacion.get('/humedad',function(peticion, respuesta){
  respuesta.type('html');

  var sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('./data/quiz.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the my database.');

    variable = 'Humedad';
    texto = 'select * from ' + variable;
  
    db.all(texto, function(err, data) {
      if (err) {
          logger.winston.error(err);
      } 
      else {
          let humedad = [];
          let id_humedad = [];
          for(let i=0; i<data.length; i++){
              id_humedad.push(data[i].id);
              humedad.push(data[i].ENG);
          }
          respuesta.render('humedad',{humedad, variable});
      }
    });
  });

});

aplicacion.get('/',function(peticion, respuesta){
  respuesta.type('html');

  var sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('./data/quiz.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the my database.');

    variable = 'Temperatura';
    texto = 'select * from ' + variable;
  
    db.all(texto, function(err, data) {
      if (err) {
          logger.winston.error(err);
      } 
      else {
          let temperatura = [];
          let id_humedad = [];
          for(let i=0; i<data.length; i++){
              id_humedad.push(data[i].id);
              temperatura.push(data[i].ENG);
          }
          respuesta.render('temperatura',{temperatura, variable});
      }
    });
  });

});

aplicacion.get('/nivel',function(peticion, respuesta){
  respuesta.type('html');

  var sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('./data/quiz.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the my database.');

    variable = 'Nivel';
    texto = 'select * from ' + variable;
  
    db.all(texto, function(err, data) {
      if (err) {
          logger.winston.error(err);
      } 
      else {
          let nivel = [];
          for(let i=0; i<data.length; i++){
              nivel.push(data[i].ENG);
          }
          respuesta.render('nivel',{nivel, variable});
      }
    });
  });

});

aplicacion.listen(8080, function(){
  console.log("Servidor conectado");
});