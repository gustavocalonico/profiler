import { githubApi } from '../../api'
import { IProfile } from '../../metadata/profile'

export async function getUserProfile(
    userName?: string | null
): Promise<IProfile> {
    const url = '/users'
    const searchUrl = userName ? `/${userName}` : ''
    const response = await githubApi.get(url + searchUrl, {})

    return response.data
}
