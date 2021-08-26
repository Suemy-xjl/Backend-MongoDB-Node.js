const mongoose = require('mongoose');

var pelicula = new mongoose.Schema({
    Id_Pelicula:{
        type: String
    },
    Titulo:{
        type: String
    },
    Descripción:{
        type: String
    },
    Duración:{
        type: String
    },
    Categoría:{
        type: String
    },
    Fecha_estreno:{
        type: String
    }
},{
    versionKey: false
});

mongoose.model('Pelicula', pelicula);