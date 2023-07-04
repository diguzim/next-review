import { Creature } from "@/types";
import { mapCreatureFromRequest } from "@/utils";

const baseUrl = `${process.env.BACKEND_HOST}/creatures`

export const CreatureService = {
  getAll: async () => {
    const res = await fetch(baseUrl);
    const json = await res.json();
    const creatures = json.map((creature: any) => mapCreatureFromRequest(creature));
    return creatures as Creature[];
  },
  get: async (id: string) => {
    const url = `${baseUrl}/${id}`;
    const res = await fetch(url);
    const json = await res.json();
    const creature = mapCreatureFromRequest(json);
    return creature;
  },
  create: async (params: Creature, authorizationToken: string) => {
    console.log('authorizationToken no service', authorizationToken)
    return await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authorizationToken}`
      }
    });
  },
  // update: async (id: string, params: ICreature) => {
  //     const creature = await Creature.findByIdAndUpdate(id, params, { new: true });
  //     return creature;
  // },
  // delete: async (id: string) => {
  //     return await Creature.findByIdAndDelete(id);
  // }
};
