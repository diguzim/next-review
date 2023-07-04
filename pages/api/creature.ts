import { CreatureService } from "@/lib";
import { mapCreatureFromRequest } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('chegou aqui');
  // Add some validation here
  const { name } = req.body;
  console.log('req.headers', req.headers)
  const authorizationToken = req.headers.authorization?.replace('Bearer ', '');
  console.log('authorizationToken', authorizationToken)

  const creatureParams = { name };
  const requestResponse = await CreatureService.create(creatureParams, authorizationToken as string);
  const json = await requestResponse.json()

  const creature = mapCreatureFromRequest(json);

  // This can be enhanced
  // probably it's best to create a helper to generically transform a fetch response in NextApiResponse (because we are still missing things, like headers)
  return res.status(requestResponse.status).json(creature)
}