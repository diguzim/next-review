import { Creature } from "@/types";

export function mapCreatureFromRequest(creature: any): Creature {
  return {
    id: creature._id,
    name: creature.name,
  }
}