import { useQuery } from 'react-query'
import { IProfileSearchUI } from '../../../../metadata/profile'
import { GET_SEARCH_USERS } from '../../../../metadata/queries'
import { errorNotification } from '../../../../utils/notification'
import { searchProfiles } from '../../services'

interface ISearchProfileReturn {
    isLoading: boolean
    profiles: IProfileSearchUI[]
}

export const useSearchProfile = (
    searchString?: string
): ISearchProfileReturn => {
    const { isLoading, data } = useQuery<IProfileSearchUI[]>(
        [GET_SEARCH_USERS, searchString],
        () => (searchString ? searchProfiles(searchString) : []),
        {
            onError: (err: any) => {
                errorNotification(err)
            },
        }
    )

    return {
        isLoading,
        profiles: (data as IProfileSearchUI[]) || [],
    }
}
