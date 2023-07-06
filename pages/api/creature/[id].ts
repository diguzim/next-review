import { CreatureService } from "@/lib";
import { mapCreatureFromRequest } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add some validation here
  const authorizationToken = req.headers.authorization?.replace('Bearer ', '');
  
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'PUT':
      {
        const { name } = req.body;
  
        const creatureParams = { name };
        const requestResponse = await CreatureService.update(id as string, creatureParams, authorizationToken as string);
        const json = await requestResponse.json()
        res.status(requestResponse.status)
  
        if (requestResponse.ok) {
          const creature = mapCreatureFromRequest(json);
          return res.json(creature)
        }
  
        return res.json(json)
      }
    case 'DELETE':
      {
        const requestResponse = await CreatureService.delete(id as string, authorizationToken as string);
        const json = await requestResponse.json()
        return res.status(requestResponse.status).json(json)
      }
    default:
      return res.status(405).json({error: `Method ${method} Not Allowed`});
  }
}
