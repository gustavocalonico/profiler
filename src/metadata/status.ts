export interface IStatus {
    languages: string[]
    langRepoCount: number[]
    percentage?: number[]
}

export type IStatusUI = Readonly<IStatus>
