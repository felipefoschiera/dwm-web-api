const mongoose = require("mongoose");

const ProjetoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String,
    dataInicio: String,
    dataTermino: String,
    nomeDemandante: String,
    emailDemandante: { type: String, unique: true }
});

module.exports = mongoose.model("Projeto", ProjetoSchema);