import React, { useState } from 'react'
import { Footer, HeaderComponent } from '../../ui/components'
import SearchResults from './components/search-results'
import { useSearchProfile } from './search.hooks'
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
            <Footer />
        </>
    )
}

export default SearchPage
