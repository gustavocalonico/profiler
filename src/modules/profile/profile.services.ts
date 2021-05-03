import { githubApi } from '../../api'
import { IProfileSearch } from '../../metadata/profile'

export async function getUserProfile(
    userName?: string | null
): Promise<IProfileSearch> {
    const url = '/users'
    const searchUrl = userName ? `/${userName}` : ''
    const response = await githubApi.get(url + searchUrl, {})

    return response.data
}
