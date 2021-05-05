import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { IProfileUI } from '../../metadata/profile'
import { GET_USER_PROFILE, GET_USER_REPOS } from '../../metadata/queries'
import { IRepoUI } from '../../metadata/repos'
import { IStatusUI } from '../../metadata/status'
import { errorNotification } from '../../utils/notification'
import { measureLanguages } from './profile.helpers'
import { getUserProfile, getUserRepos } from './profile.services'

interface IGetProfileReturn {
    isLoading: boolean
    profile?: IProfileUI
}

export const useGetProfile = (userName?: string): IGetProfileReturn => {
    const { isLoading, data: profileData } = useQuery<IProfileUI>(
        [GET_USER_PROFILE, userName],
        () => getUserProfile(userName),
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onError: (err: any) => {
                errorNotification(err)
            },
        }
    )

    return {
        isLoading,
        profile: (profileData as IProfileUI) || undefined,
    }
}

interface IGetLangsReturn {
    isLoading: boolean
    langs?: IStatusUI[]
}

export const useGetLangs = (url?: string): IGetLangsReturn => {
    const { isLoading, data: repoData } = useQuery<IRepoUI[]>(
        [GET_USER_REPOS, url],
        () => getUserRepos(url),
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onError: (err: any) => {
                errorNotification(err)
            },
        }
    )

    const status = useMemo(() => {
        if (repoData) return measureLanguages(repoData)
        return undefined
    }, [repoData])

    return {
        isLoading,
        langs: status,
    }
}
