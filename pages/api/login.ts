import { UserService } from "@/lib";
import { NextApiRequest, NextApiResponse } from "next";

const baseUrl = `${process.env.BACKEND_HOST}/users/login`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add some validation here
  const { email, password } = req.body;

  const login = { email, password };
  const requestResponse = await UserService.login(login);
  const json = await requestResponse.json()

  // This can be enhanced
  // probably it's best to create a helper to generically transform a fetch response in NextApiResponse (because we are still missing things, like headers)
  return res.status(requestResponse.status).json(json)
}
