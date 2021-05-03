import { githubApi } from '../../../api'
import { IProfileSearch } from '../../../metadata/profile'

export async function searchProfiles(
    searchValue?: string | null,
    pageSize = 30
): Promise<IProfileSearch[]> {
    const url = '/search/users'
    const searchUrl = searchValue
        ? `?per_page=${pageSize}&page=1&q=${searchValue}`
        : ''
    const response = await githubApi.get(url + searchUrl, {})
    return response.data.items
}
