import React, { useState } from 'react'
import { HeaderComponent } from '../../ui/components'

const SearchComponent: React.FC = () => {
    const [search, setSearch] = useState<string>()

    return (
        <>
            <HeaderComponent onSearch={(e: string) => setSearch(e)} />
            <div /* component with search parameters */>test</div>
        </>
    )
}

export default SearchComponent
