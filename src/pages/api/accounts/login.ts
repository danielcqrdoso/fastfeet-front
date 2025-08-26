import { NextApiRequest, NextApiResponse } from "next";
import { FastfeetApi } from "@lib/functions/getApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cpf, email, password } = req.body

  console.log(req.body)
  const post = await FastfeetApi.post('/accounts/sessions', {
    ...(cpf && { cpf }),
    ...(email && { email }), password
  })

  return res.status(post.statusCode).json(post.data)
}
