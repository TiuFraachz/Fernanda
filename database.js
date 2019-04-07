var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect(process.env.database, {
    useMongoClient: true
}, (err) => {
    if (err) return console.log("Erro ao conectar no database!");
    console.log("Conectado ao BANCO DE DADOS!");
})

// Eventos

var User = new Schema({

})

// Comandos

var Cla = new Schema({

})

var Users = mongoose.model("Users", User);
exports.Users = Users