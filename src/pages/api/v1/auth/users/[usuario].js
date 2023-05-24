import { prisma } from "@/lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { usuario } = req.query
        const { senha } = req.body
        const verifyUser = await prisma.usuario.findUnique({
            where: {
                usuario: usuario
            }
        })
        if (verifyUser) {
            const putUser = await prisma.usuario.update({
                where: {
                    usuario: verifyUser.usuario
                },
                data: {
                    senha: senha
                }


            })
            return res.status(201).json(putUser)
        }
        else {
            res.status(404).json({
                "Erro": "Usuário não encontrado"
            })
        }
    }
}