//llamando a express
const express = require('express');

const morgan = require('morgan');

//ejecutando express
const app = express();

//configuraion de express
app.set('variable','nombre');

//para configuracion del puerto
app.set('port',3000);

//plantilla para trabajar con express
app.set('view engine','ejs');

//ejecutar morgan
app.use(morgan('dev')); 


/* miderwer funcion que permite ejecutar todas las rutas
function miderwer (req,res,next){
 console.log(`ruta de internet ${req.protocol}://${req.get('host')}${req.originalUrl}`);
 next();
};
*/

//usando una expresion para leer un jason 
app.use(express.json());


/*
app.all('/user',(req,res,next) =>{
   console.log('pase por aqui');

parametro que permite seguir las otras rutas
   next();
});

*/

/*metodo para mostra datos en pantalla*/
app.get('/user',(req,res) =>{
 res.send('hello word');
})

/*/nombre de la ruta/:nombre de la condicion*/
app.post('/user/:id',(req,res) =>{
/*respondiendo con un body*/
 console.log(req.body);
 console.log(req.params);
 res.send('peticion de otros datos');
});

/*meto para eliminar datos*/
app.delete('/user/:userId',(req,res)=>{
 res.send(req.params.userId + ":fue eliminado con exicto");
})

/*metos para empujar datos*/
app.put('/user/:id',(req,res)=>{
  console.log(req.body);
  res.send(req.params.id + ' :datos actualizados con exito');
});

app.use(express.static('elementos'));

app.listen(app.set('port'),() => {
  console.log(app.get('variable'));
  console.log('servidor activo en puerto', app.get('port'));
});

