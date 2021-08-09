'use strict'

var mongoose = require('mongoose');
var app = require('./app');
// var port = 3800;
var userInit = require('./controllers/user.controller');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://proyecto:root@weeklyscheduleplannerba.z77ti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Se encuentra conectado a la base de datos Weekly-Schedule-Planner');
        //userInit.createInit();
        app.listen(process.env.PORT || 3000, function () {
            console.log("Servidor corriendo en el puerto 3000")
        })
    })
    .catch((err)=>console.log('Error de conexión a la base de datos', err))
    