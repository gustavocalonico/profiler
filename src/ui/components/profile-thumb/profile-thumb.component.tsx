import { Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { IProfileSearchUI } from '../../../metadata/profile'
import { Avatar, Card } from './profile-thumb.styles'

interface IProfileThumbComponentProps {
    profile: IProfileSearchUI
}

const ProfileThumbComponent: React.FC<IProfileThumbComponentProps> = ({
    profile,
}) => {
    return (
        <Link to={`/profile/${profile.login}`}>
            <Card title={profile.login}>
                <Avatar
                    src={profile.avatar_url}
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                />
            </Card>
        </Link>
    )
}

export default ProfileThumbComponent
