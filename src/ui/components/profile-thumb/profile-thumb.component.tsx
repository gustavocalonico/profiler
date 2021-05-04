import { Avatar, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { IProfileSearchUI } from '../../../metadata/profile'
import { Card } from './profile-thumb.styles'

interface IProfileThumbComponentProps {
    profile: IProfileSearchUI
}

const ProfileThumbComponent: React.FC<IProfileThumbComponentProps> = ({
    profile,
}) => {
    return (
        <Link to={`/profile/${profile.login}`}>
            <Card title={profile.login}>
                <Avatar src={profile.avatar_url} size="large" />
                <Typography>{profile.login}</Typography>
            </Card>
        </Link>
    )
}

export default ProfileThumbComponent
