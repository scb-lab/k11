import * as z from "zod";
import { addressSchemaZod } from "./shared";
export const zExpertiseAdd = z.object({
  date: z.string(),
  place: z.string(),
  patient_id: z.string(),
  applicant_id: z.string(),
  Payement_condition: z.number(),
  billed: z.boolean(),
  travelling_expenses: z.number(),
  text: z.array(z.string()),
});
export const zExpertiseFind = z
  .object({
    _id: z.string(),
    date: z.object({ $gte: z.string(), $lte: z.string() }),
    place: z.string(),
    patient_id: z.string(),
    applicant_id: z.string(),
    Payement_condition: z.number(),
    billed: z.boolean(),
    travelling_expenses: z.number(),
    text: z.array(z.string()),
  })
  .partial();
export const zExpertiseAll = z.object({});
export const zExpertiseUpdate = z.object({
  id: z.string(),
  expertise: z.object({
    date: z.string(),
    place: z.string(),
    patient_id: z.string(),
    applicant_id: z.string(),
    Payement_condition: z.number(),
    billed: z.boolean(),
    travelling_expenses: z.number(),
    text: z.array(z.string()),
  }),
});
export const zExpertiseDelete = z.object({ id: z.string() });
