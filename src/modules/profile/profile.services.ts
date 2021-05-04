import { githubApi } from '../../api'
import { IProfileUI } from '../../metadata/profile'

export async function getUserProfile(
    userName?: string | null
): Promise<IProfileUI> {
    const url = '/users'
    const searchUrl = userName ? `/${userName}` : ''
    const response = await githubApi.get(url + searchUrl, {})

    return response.data
}
