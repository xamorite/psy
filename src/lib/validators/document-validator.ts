import { z } from 'zod'

export const REGIONS = ["European", "Northern Africa", "Southern Africa", "Eastern Africa", "Western Africa", "Central"] as const
export const GENOMIC_CATEGORY = ["GWAS", "Candidate Gene", "Familial Linkage", "Epigenetics", "Expression", "Microbiome", "Others", "Undefined"] as const
export const DISORDERS = ["Mood", "Pyschotic", "Substance", "Depression", "Anxiety", "PTSD", "Neurodevelopmental", "Suicide", "Others"] as const
export const ARTICLE = ["Case Report", "Research Study", "Systematic Review"] as const
export const YEAR = ["2024", "2023", "2022", "2021", "2020"] as const



export const DocumentFilterValidator = z.object({
    region: z.array(z.enum(REGIONS)),
    genomic: z.array(z.enum(GENOMIC_CATEGORY)),
    disorder: z.array(z.enum(DISORDERS)),
    article: z.array(z.enum(ARTICLE)),
    year: z.array(z.enum(YEAR)),
})

export type DocumentState = z.infer<typeof DocumentFilterValidator>