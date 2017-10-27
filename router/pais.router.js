const router = require('express').Router();
const handler = require('../utils/handler');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/guia', {
  useMongoClient: true
});

const Pais = require('../models/pais.model');

module.exports = () => {

    router.get('/', (req, res) => {
        Pais.find({})
        .sort()
        .exec(handler.handleMany.bind(null, 'pais', res));
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        Pais.find({_id:id})
        .sort()
        .exec(handler.handleOne.bind(null, 'pais', res));
    });
    //EJERCICIO CONSULTA POR NOMBRE
    //EJERCICIO CONSULTA POR NOMBRE
    router.get('/nombrepais/:nombrepais', (req, res) => {
        const nombrepais = req.params.nombrepais;
        Pais.find({nombrepais:nombrepais})
        .sort()
        .exec(handler.handleOne.bind(null, 'pais', res));
    });
    //
   
        //MÉTODOS PARA INSERTAR


    router.post('/', (req, res) => {
        //Recibir los parámetros

        const pais= req.body;
        Pais.create(pais)
            .then(
                function(data){
                    console.log(data);
                    res.json(data);
                }
            )
            .catch(
                function (err) {
                    console.log(err);
                    res.status(400);
                    res.json({err:err});
                }
            );
        
    });

    //
    //MÉTODO ELIMINAR
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        Pais.remove({_id:id}, function(err,data) {
           if(err){
               console.log(err);
               res.status(400);
               res.json({err,err})
           } else{
               res.json({msj:"Se ha eliminado el documento correctamente."});
           }
        });

        
       
    });
    return router;
}