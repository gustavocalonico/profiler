import React, { useState } from 'react'
import { HeaderComponent } from '../../ui/components'
import { useGetProfile } from './profile.hooks'
import { Content, CustomSpin } from './profile.styles'

const SearchPage: React.FC = () => {
    const [searchValue, setSearch] = useState<string>('')
    const { isLoading, profile } = useGetProfile(searchValue)

    return (
        <>
            <HeaderComponent onSearch={(e: string) => setSearch(e)} />
            <Content>
                {isLoading ? <CustomSpin size="large" /> : <div />}
            </Content>
        </>
    )
}

export default SearchPage
