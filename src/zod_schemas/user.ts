import * as z from "zod";
import { addressSchemaZod } from "./shared";
export const zUserAdd = z.object({
  lastname: z.string(),
  firstname: z.string(),
  title: z.string(),
  establishment: z.string(),
  service: z.string(),
  address: addressSchemaZod,
  email: z.string(),
  phone_home: z.string(),
  phone_cell: z.string(),
  iban: z.string(),
  login: z.string(),
  pwdHash: z.string(),
});
export const zUserFind = zUserAdd.augment({ id: z.string() }).partial();
export const zUserAll = z.object({});
export const zUserUpdate = z.object({
  id: z.string(),
  user: z.object({
    lastname: z.string(),
    firstname: z.string(),
    title: z.string(),
    establishment: z.string(),
    service: z.string(),
    address: addressSchemaZod,
    email: z.string(),
    phone_home: z.string(),
    phone_cell: z.string(),
    iban: z.string(),
    login: z.string(),
    pwdHash: z.string(),
  }),
});
export const zUserDelete = z.object({ id: z.string() });
