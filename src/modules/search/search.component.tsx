import Search from 'antd/lib/input/Search'
import React from 'react'
import { HeaderComponent } from '../../ui/components'

const SearchComponent: React.FC = () => {
    const onSearch = (): void => {
        console.log('search')
    }

    return (
        <HeaderComponent>
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 200 }}
            />
        </HeaderComponent>
    )
}

export default SearchComponent
