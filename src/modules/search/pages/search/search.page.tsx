import React, { useState } from 'react'
import { Layout } from 'antd'
import { HeaderComponent } from '../../../../ui/components'

const { Content } = Layout

const SearchPage: React.FC = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <>
            <HeaderComponent onSearch={(e: string) => setSearch(e)} />
            <Content>test</Content>
        </>
    )
}

export default SearchPage
