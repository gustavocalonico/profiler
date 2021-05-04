import React from 'react'
import { GithubOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { IProfileUI } from '../../../metadata/profile'
import { Header, Search, Typography, Button } from './header.styles'

interface HeaderComponentProps {
    onSearch?: (value: string) => void
    profile?: IProfileUI
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
    onSearch,
    profile,
}) => {
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
            {profile ? (
                <a
                    href={profile ? profile?.html_url : ''}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        type="primary"
                        shape="round"
                        icon={<GithubOutlined />}
                        size="large"
                    />
                </a>
            ) : (
                <></>
            )}
        </Header>
    )
}

export default HeaderComponent
