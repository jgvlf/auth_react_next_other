import { prisma } from "@/lib/prisma";

var jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { usuario, senha } = req.body
        const user = await prisma.usuario.findMany({
            where: {
                AND: [
                    {
                        usuario: usuario
                    },
                    {
                        senha: senha
                    }
                ]
            }
        })
        if (user.length === 0) {
            return res.status(401).json({
                "Error": "Usuário ou senha incorretos."
            })
        }
        else {
            const requestData = user[0]
            const RANDOM = Math.floor(Math.random() * (1000 + 1))
            const SECRET = `${usuario}${senha}${RANDOM}`
            const token = jwt.sign({ user: requestData.usuario, senha: requestData.senha }, SECRET, { expiresIn: 5000 })
            return res.json({
                auth: true,
                token
            });
        }

    }
}