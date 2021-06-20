import  express  from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});


const app= express();

//conectar la base de datos
db.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error =>console.log (error));

//defenir puerto

//const port = process.env.PORT || 4000;
//definir carpeta publica

app.use(express.static('public'))
//app.use('/viajes', express.static('public'));

//Obtener el Año actual

app.use((req,res, next)=>{
    const year = new Date();
    res.locals.actualyear = year.getFullYear() 
    res.locals.nombreSitio = "Agencia de Viajes"
    return next();
})

//agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended:true}));

//habilitar PUG

app.set('view engine', 'pug')

// agregar router

app.use('/', router)

//puerto hijos para la app

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host, ()=>{
    console.log (`El servidor esta funcionando `)
})