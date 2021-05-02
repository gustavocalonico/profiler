import React, { useCallback, useState } from 'react'
import { IProfileUI } from '../../metadata/profile'
import { HeaderComponent } from '../../ui/components'
import { searchProfile } from './hooks'

const SearchComponent: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [profiles, setProfiles] = useState<IProfileUI[]>([])

    const handleSearch = useCallback((value: string) => {
        const {
            isLoading: resultLoading,
            profiles: resultProfiles,
        } = searchProfile(value)
        setLoading(resultLoading)
        setProfiles(resultProfiles)
    }, [])

    return (
        <>
            <HeaderComponent onSearch={handleSearch} />
            <div>test</div>
        </>
    )
}

export default SearchComponent
