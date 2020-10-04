const Usuario = require('../model/UsuarioSchema');

module.exports = {
    listar: async (req, res) => {
        await Usuario.find((err, objetos) => {
            (err ? res.status(400).send("Erro ao recuperar os objetos.") :
                   res.status(200).json(objetos));
        });
    },

    incluir: async (req, res) => {
        let obj = new Usuario(req.body);
        await obj.save((err, obj) => {
            (err ? res.status(400).send("Erro ao incluir o objeto.") : 
                   res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Usuario(req.body);
        await Usuario.updateOne({ _id: obj._id }, obj, function(err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        await Usuario.deleteOne({ _id: req.params.id }, function(err)  {
            (err ? res.status(400).send(err) :
                   res.status(200).json("message:ok"));
        });
    },

    obterPeloId: async (req, res) => {
        const obj = await Usuario.findOne({ _id: req.params.id }, function(err) {
            if(err) {
                res.status(400).send(err);
            }
        });
        res.status(200).json(obj);
    },

    filtrar: async (req, res) => {
        const objetos = await Usuario.find({
            $or: [
                { nome: { $regex: req.params.filtro, $options: "i"}},
                { email: { $regex: req.params.filtro, $options: "i"}},

            ],
        }, function(err) {
            if(err)
            res.status(400).send(err);
        }).sort({ nome: -1});
        res.json(objetos);
    }

};