import { useQuery } from 'react-query'
import { IProfileUI } from '../../metadata/profile'
import { GET_USER_PROFILE, GET_USER_REPOS } from '../../metadata/queries'
import { IRepo, IRepoUI } from '../../metadata/repos'
import { errorNotification } from '../../utils/notification'
import { getUserProfile, getUserRepos } from './profile.services'

interface IGetProfileReturn {
    isLoading: boolean
    profile?: IProfileUI
}

export const useGetProfile = (userName?: string): IGetProfileReturn => {
    const {
        isLoading: isLoadingProfile,
        data: profileData,
    } = useQuery<IProfileUI>(
        [GET_USER_PROFILE, userName],
        () => getUserProfile(userName),
        {
            onError: (err: any) => {
                errorNotification(err)
            },
        }
    )

    const { isLoading: isLoadingRepos, data: repoData } = useQuery<IRepoUI>(
        [GET_USER_REPOS, userName],
        () => getUserRepos(profileData),
        {
            onError: (err: any) => {
                errorNotification(err)
            },
        }
    )

    console.log(repoData)

    return {
        isLoading: isLoadingProfile && isLoadingRepos,
        profile: (profileData as IProfileUI) || undefined,
    }
}
