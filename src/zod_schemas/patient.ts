import * as z from "zod";
import { addressSchemaZod } from "./shared";
export const zPatientAdd = z.object({
  firstname: z.string(),
  lastname: z.string(),
  date_of_birth: z.string(),
  place_of_birth: z.string(),
  email: z.string(),
  address: addressSchemaZod,
  civility: z.string(),
  phone_home: z.string(),
  phone_cell: z.string(),
  doctor_id: z.string(),
});
export const zPatientFind = zPatientAdd.augment({ id: z.string() }).partial();
export const zPatientAll = z.object({});
export const zPatientUpdate = z.object({
  id: z.string(),
  patient: z.object({
    firstname: z.string(),
    lastname: z.string(),
    date_of_birth: z.string(),
    place_of_birth: z.string(),
    email: z.string(),
    address: addressSchemaZod,
    civility: z.string(),
    phone_home: z.string(),
    phone_cell: z.string(),
    doctor_id: z.string(),
  }),
});
export const zPatientDelete = z.object({ id: z.string() });
