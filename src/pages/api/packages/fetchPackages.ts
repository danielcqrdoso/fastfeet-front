import { NextApiRequest, NextApiResponse } from "next";
import { FastfeetApi } from "@lib/functions/getApi";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const post = await FastfeetApi.post('/product/fetch', { name: 'product1' })
  console.log(post.statusCode)
  res.status(post.statusCode).json(post.data)
}
