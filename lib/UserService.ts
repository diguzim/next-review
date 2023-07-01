import { Register } from "@/types";

const baseUrl = `${process.env.BACKEND_HOST}/users`

export const UserService = {
  register: async (register: Register) => {
    return await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(register),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
};
