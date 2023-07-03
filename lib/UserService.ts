import { Register, Login } from "@/types";

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
  login: async (login: Login) => {
    return await fetch(`${baseUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
};
