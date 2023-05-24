import { prisma } from "@/lib/prisma";

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
            return res.status(400).json({
                "Error": "Usuário ou senha incorretos."
            })
        }
        else {
            return res.json(user[0])
        }

    }
}