import * as z from "zod";
import { addressSchemaZod } from "./shared";
export const zClaimantAdd = z.object({
  lastname: z.string(),
  firstname: z.string(),
  email: z.string(),
  address: addressSchemaZod,
  type: z.number(),
  civility: z.string(),
  phone_home: z.string(),
  phone_cell: z.string(),
});
export const zClaimantFind = zClaimantAdd.augment({ id: z.string() }).partial();
export const zClaimantAll = z.object({});
export const zClaimantUpdate = z.object({
  id: z.string(),
  claimant: z.object({
    lastname: z.string(),
    firstname: z.string(),
    email: z.string(),
    address: addressSchemaZod,
    type: z.number(),
    civility: z.string(),
    phone_home: z.string(),
    phone_cell: z.string(),
  }),
});
export const zClaimantDelete = z.object({ id: z.string() });
