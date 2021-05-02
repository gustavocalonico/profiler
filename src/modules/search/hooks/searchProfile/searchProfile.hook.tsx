import { IProfileUI } from '../../../../metadata/profile'

interface ISearchProfileReturn {
    isLoading: boolean
    profiles: IProfileUI[]
}

const searchProfile = (searchString: string): ISearchProfileReturn => {
    return {
        isLoading: false,
        profiles: [],
    }
}

export default searchProfile
