import { githubApi, rawApi } from '../../api'
import { IProfileUI } from '../../metadata/profile'
import { IRepoUI } from '../../metadata/repos'

export async function getUserProfile(
    userName?: string | null
): Promise<IProfileUI> {
    const url = '/users'
    const searchUrl = userName ? `/${userName}` : ''
    const response = await githubApi.get(url + searchUrl, {})

    return response.data
}

export async function getUserRepos(url?: string): Promise<IRepoUI[]> {
    if (url) {
        const response = await rawApi.get(url, {})
        return response.data
    }
    return []
}
