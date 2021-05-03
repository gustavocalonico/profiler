import { useQuery } from 'react-query'
import { IProfileSearchUI } from '../../metadata/profile'
import { GET_USER_PROFILE } from '../../metadata/queries'
import { errorNotification } from '../../utils/notification'
import { getUserProfile } from './profile.services'

interface IGetProfileReturn {
    isLoading: boolean
    profile: IProfileSearchUI
}

export const useGetProfile = (userName?: string): IGetProfileReturn => {
    const { isLoading, data } = useQuery<IProfileSearchUI>(
        [GET_USER_PROFILE, userName],
        () => getUserProfile(userName),
        {
            onError: (err: any) => {
                errorNotification(err)
            },
        }
    )

    return {
        isLoading,
        profile: (data as IProfileSearchUI) || [],
    }
}
