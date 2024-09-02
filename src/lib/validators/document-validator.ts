import { z } from 'zod'

export const DocumentFilterValidator = z.object({
    region: z.string(),
    disorder: z.string(),
    article: z.string(),
    year: z.string(),
})

export type DocumentState = z.infer<typeof DocumentFilterValidator>