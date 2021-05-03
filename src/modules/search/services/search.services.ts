import { githubApi } from '../../../api'
import { IProfile } from '../../../metadata/profile'

export async function searchProfiles(
    searchValue?: string | null,
    pageSize = 30
): Promise<IProfile[]> {
    const url = '/search/users'
    const searchUrl = searchValue
        ? `?per_page=${pageSize}&page=1&q=${searchValue}`
        : ''
    const response = await githubApi.get(url + searchUrl, {})
    return response.data.items
}
