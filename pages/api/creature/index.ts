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
  
  res.status(requestResponse.status)

  if (requestResponse.ok) {
    const creature = mapCreatureFromRequest(json);
    return res.json(creature)
  } else {
    return res.json(json)
  }
}
