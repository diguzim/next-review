import { Creature } from "@/types";

const baseUrl = `${process.env.BACKEND_HOST}/creatures`

export const CreatureService = {
    getAll: async () => {
      const res = await fetch(baseUrl);
      const json = await res.json();
      const creatures = json.map ((creature: any) => mapCreatureFromRequest(creature));
      return creatures as Creature[];
    },
    get: async (id: string) => {
      const url = `${baseUrl}/${id}`;
      const res = await fetch(url);
      const json = await res.json();
      const creature = mapCreatureFromRequest(json);
      return creature;
    },
    // create: async (params: ICreature, user: UserDoc) => {
    //     const creature = Creature.build({
    //         ...params,
    //         userId: user?.id
    //     });
    //     await creature.save();
    //     return creature;
    // },
    // update: async (id: string, params: ICreature) => {
    //     const creature = await Creature.findByIdAndUpdate(id, params, { new: true });
    //     return creature;
    // },
    // delete: async (id: string) => {
    //     return await Creature.findByIdAndDelete(id);
    // }
};

function mapCreatureFromRequest(creature: any): Creature {
  return {
    id: creature._id,
    name: creature.name,
  }
}