import { useMemo, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { IProfileUI } from '../../../../metadata/profile'
import { GET_SEARCH_USERS } from '../../../../metadata/queries'
import { errorNotification } from '../../../../utils/notification'
import { searchProfiles } from '../../services'

interface ISearchProfileReturn {
    isLoading: boolean
    profiles: IProfileUI[]
}

export const useSearchProfile = (
    searchString?: string
): ISearchProfileReturn => {
    const { isLoading, data } = useQuery<IProfileUI[]>(
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
        profiles: (data as IProfileUI[]) || [],
    }
}
