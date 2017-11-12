'use strict'
// Variables
var titulo = "Luis y sus amigos"
var persona = {
	nombres: "Luis Fernando",
	apellidos: "Guanilo Quiñones",
	edad: 20,
}
var amigos = [
{
	nombres: "Sandra Patricia",
	apellidos: "Silva Mendoza",
	edad: 20,
},
{
	nombres: "Renzo Enrique",
	apellidos: "Silvestre Reyes",
	edad: 21,
},
{
	nombres: "Diego Arturo",
	apellidos: "Castro Ayala",
	edad: 20,
},
{
	nombres: "Kelvin Anthony",
	apellidos: "Camus Segura",
	edad: 20,
},
];
// REQUERIMIENTOS DE MODULOS
	var express = require ('express')
	
//CONFIGURACIONES
// Creacion del servidor web con express
var reto = express();
var swig=require('swig')
// Integracion del motor de templates swig
reto.engine('html',swig.renderFile);
reto.set('view engine','html');
reto.set('views', __dirname + '/views' );
swig.setDefaults({cache: false});
// Seteo de direccion de carpeta de archivos estaticos
//reto.use(express.static(__dirname + '/public'));
//PETICIONES
// Cuanto exisita una peticion en el servidor
reto.get('/',function(req,res){
	res.render('Amigos.html',{titulo:titulo,persona:persona,amigos:amigos});
});
//INICIAR SERVIDOR
//Se corre el servidor en el puerto 8000
reto.listen(8000,function(){
	console.log('El servidor esta escuchando en el puerto'+ 8000)

});