const express = require('express');
const router = express.Router();
var colors = require('colors');
const mongoose = require('mongoose');
const Pelicula = mongoose.model('Pelicula',undefined, 'Pelicula');

router.get('/Pelicula',(req,res) => {
    Pelicula.find((err,docs) => {
        if(!err){
            res.json(docs);
        }else{
            res.json();
            console.log('Error find: '.bgRed = err);
        }
    }).lean;
});

router.get('/Pelicula/:id_Pelicula', (req,res) =>{
    Pelicula.findById(req.params.id, (err,doc) => {
        if(!err){
            res.json(doc);
        }else{
            //retorna null
            console.log('Error findById: '.bgRed = er);
        }
    }).lean();
})

router.post('/Pelicula',(req,res) => {
    var pelicula = new Pelicula();
    pelicula.Id_Pelicula = req.body.Id_Pelicula;
    pelicula.Titulo = req.body.Titulo;
    pelicula.Descripción = req.body.Descripcion;
    pelicula.Duración = req.body.Duracion;
    pelicula.Categoría = req.body.Categoria;
    pelicula.Fecha_estreno = req.body.Fecha_estreno;
    pelicula.save((err,doc) => {
        if(!err){
            res.json ({Status: 'Pelicula save'})
        }else{
            res.json();
            console.log(''.red + err);
        }
    });
});

router.put('/Pelicula:id_Pelicula', (req,res) => {
    Pelicula.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}, (err,doc) => {
        if(!err){
            res.json({Status : 'Pelicula findByIdAndUpdate'});
        }else{
            res.json();
            console.log(''.red + err);
        }
    });
});

router.delete('/Pelicula/:id_Pelicula', (req,res) => {
    Pelicula.findByIdAndRemove(req.params.id, (err,doc) => {
        if(!err){
            res.json({Status : 'Pelicula findByIdAndRemove'});
        }else{
            res.json();
            console.log(''.red + err);
        }
    });
});

module.exports = router;
