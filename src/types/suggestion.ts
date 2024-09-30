
export interface Suggestion {
    authors: string[]
    disorders: { id: number; disorder_name: string; length: number }[]
    study_titles: string[]
}