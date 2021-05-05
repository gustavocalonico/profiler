export interface IStatus {
    language: string
    langRepoCount: number
    percentage?: number
}

export type IStatusUI = Readonly<IStatus>
