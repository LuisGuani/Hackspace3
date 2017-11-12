'use strict'
// VARIABLES
var especialidades = [
{
	nombre: 'FRONTEND',
	imagen:'frontend.png'
},
{
	nombre: 'BACKEND',
	imagen: 'backend.png'
},
{
	nombre: 'ELECTRONICA',
	imagen: 'electronica.png'
},
{
	nombre: 'ANDROID',
	imagen: 'android.png'
},
{
	nombre: 'ALGORITMOS',
	imagen: 'algoritmos.png'
},
];
//REQUERIMIENTO DE MODULOS
var express = require('express');
var swig = require('swig');
//CONFIGURACIONES
// Creacion del servidor web con express
var server = express();
// Integracion del motor de templates swig
server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views', __dirname + '/views' );
swig.setDefaults({cache: false});
// Seteo de direccion de carpeta de archivos estaticos
server.use(express.static(__dirname + '/public'));
//PETICIONES
// Cuanto exisita una peticion en el servidor
server.get('/',function(req,res){
	res.render('especialidades.html', { categorias:especialidades });
});
//INICIAR SERVIDOR
//Se corre el servidor en el puerto 8000
server.listen(8000,function(){
	console.log('El servidor esta escuchando en el puerto'+ 8000)

});
