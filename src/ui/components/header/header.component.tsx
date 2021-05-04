import React from 'react'
import { Header, Search, Typography } from './header.styles'

interface HeaderComponentProps {
    onSearch?: (value: string) => void
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ onSearch }) => {
    return (
        <Header>
            <Typography>Github User Search</Typography>
            {onSearch ? (
                <Search
                    placeholder="User name"
                    allowClear
                    onSearch={onSearch}
                />
            ) : (
                <></>
            )}
        </Header>
    )
}

export default HeaderComponent
