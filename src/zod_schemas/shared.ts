import * as z from "zod";
export const addressSchemaZod = z.object({
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.string(),
  country: z.string(),
});
