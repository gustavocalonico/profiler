import React from 'react'
import {
    Container,
    GithubOutlined,
    Header,
    Search,
    Title,
} from './header.styles'

interface HeaderComponentProps {
    onSearch?: (value: string) => void
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ onSearch }) => {
    return (
        <Header>
            <Container href={process.env.PUBLIC_URL} rel="noreferrer">
                <GithubOutlined style={{ fontSize: 24 }} />
                <Title level={5} style={{ color: '#ffff' }}>
                    Github Profiler
                </Title>
            </Container>
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
