const User = require('../Models/User');

class UserController {

    async show(req, res) {
        let userExist = await User.find({});
        return res.status(200).json({
            error: false,
            userExist
        })
    };

    async store(req, res) {

        const { nome, pontos } = req.body;
        const data = { nome, pontos };


        await User.create(data, (err) => {

            if (err) return res.status(400).json({
                error: true,
                message: "Erro ao tentar inserir usuário no MongoDB" + req.body
            })

            return res.status(200).json({
                error: false,
                message: "Usuário Cadastrado com sucesso"
            })
        })
    }
}

module.exports = new UserController();