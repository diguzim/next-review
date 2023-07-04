import { CreatureService } from "@/lib";
import { mapCreatureFromRequest } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add some validation here
  const { name } = req.body;
  const authorizationToken = req.headers.authorization?.replace('Bearer ', '');

  const creatureParams = { name };
  const requestResponse = await CreatureService.create(creatureParams, authorizationToken as string);
  const json = await requestResponse.json()

  const creature = mapCreatureFromRequest(json);

  // This can be enhanced
  // probably it's best to create a helper to generically transform a fetch response in NextApiResponse (because we are still missing things, like headers)
  return res.status(requestResponse.status).json(creature)
}