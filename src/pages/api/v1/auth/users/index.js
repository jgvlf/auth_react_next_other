import { prisma } from "@/lib/prisma"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const allUsers = await prisma.usuario.findMany()
        return res.status(200).json(allUsers)
    }
    if (req.method === 'POST') {
        const { usuario, senha } = req.body
        const verifyUser = await prisma.usuario.findUnique({
            where: {
                usuario: usuario
            }
        })
        if (!verifyUser) {
            const createUser = await prisma.usuario.create({
                data: {
                    usuario: usuario,
                    senha: senha
                }
            })
            return res.status(201).json(createUser)
        }
        else {
            res.status(400).json({
                "Erro": "Usuário já utilizado"
            })
        }
    }
}
