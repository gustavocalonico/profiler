import { IRepoUI } from '../../metadata/repos'
import { IStatusUI } from '../../metadata/status'

export const measureLanguages = (repos: IRepoUI[]): IStatusUI => {
    // Get all repositories languages
    const langs: string[] = []
    repos.forEach((repo) => {
        langs.push(repo.language)
    })

    // Make the languages unique
    const uniqueLangs = langs.filter((elem, index, self) => {
        return index === self.indexOf(elem)
    })

    // Make an array with same lenght of unique langs
    const repoCount: number[] = uniqueLangs.map(() => 0)

    // Count which langs matches the unique
    uniqueLangs.forEach((uniLang, index) => {
        langs.forEach((lang) => {
            if (lang === uniLang) repoCount[index] += 1
        })
    })

    // Calcualte percentages of langs and repositories
    const percentages: number[] = repoCount.map(() => 0)
    const totalRepos = repoCount.reduce((prev, current) => prev + current, 0)
    repoCount.forEach((item, index) => {
        percentages[index] = item / totalRepos
    })

    return {
        languages: uniqueLangs,
        langRepoCount: repoCount,
        percentage: percentages,
    }
}
