export default async function handler(req, res) {
    if (req.method === 'POST') {
        return res.status(201).json({
            "Response": "O usuário saiu da conta."
        })
    }
}