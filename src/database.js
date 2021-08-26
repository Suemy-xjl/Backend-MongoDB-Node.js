const mongoose = require('mongoose');
var colors = require('colors');
//|| 'mongodb://localhost:3000/ProyectoInvestigacion'

const URI = 'mongodb+srv://Suemy:suemy1107@cluster0.g2j4i.mongodb.net/ProyectoInvestigacion?retryWrites=true&w=majority';

mongoose.connect(URI , {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true}, (err) =>{
        if(!err){
            console.log('Conexion MongoDB Atlas o local Correcto'.bgGreen);
        }else{
            console.log('Error al conectar:'.bgRed + err);
        }
});

require('./models/Pelicula-model');