import React, { useState } from 'react'
import { HeaderComponent } from '../../../../ui/components'
import SearchResults from '../../components/search-results'
import { useSearchProfile } from '../../hooks'
import { Content, CustomSpin } from './search.styles'

const SearchPage: React.FC = () => {
    const [searchValue, setSearch] = useState<string>('')
    const { isLoading, profiles } = useSearchProfile(searchValue)

    return (
        <>
            <HeaderComponent onSearch={(e: string) => setSearch(e)} />
            <Content>
                {isLoading ? (
                    <CustomSpin size="large" />
                ) : (
                    <SearchResults profiles={profiles} />
                )}
            </Content>
        </>
    )
}

export default SearchPage
