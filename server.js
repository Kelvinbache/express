//llamando a express
const express = require('express');

//ejecutando express
const app = express();

//usando una expresion para leer un jason 
app.use(express.json());

/*metodo para mostra datos en pantalla*/
app.get('/get',(req,res) =>{
   res.json({user:"kelvin",telefono:"13212132"})
})

app.post('/user',(req,res) =>{
/*respondiendo con un body*/
 console.log(req.body);

 res.send('peticion de otros datos');
});

/*meto para eliminar datos*/
app.delete('/delete',(req,res)=>{
 res.send('peticion de eliminar elemento');
})

/*metos para empujar datos*/
app.put('/put',(req,res)=>{
  res.send('peticion de empujar archivos')
});

app.listen(5000,() => {
  console.log('servidor activo')
});


