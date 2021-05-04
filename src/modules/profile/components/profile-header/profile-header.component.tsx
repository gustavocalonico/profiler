import {
    CodeOutlined,
    EnvironmentOutlined,
    GithubOutlined,
    LinkOutlined,
    TeamOutlined,
} from '@ant-design/icons'
import React from 'react'
import { IProfileUI } from '../../../../metadata/profile'
import {
    Avatar,
    Header,
    HeaderSection,
    Title,
    Text,
    MiniText,
} from './profile-header.styles'

interface IProfileHeaderProps {
    profile: IProfileUI
}

const ProfileHeader: React.FC<IProfileHeaderProps> = ({ profile }) => {
    return (
        <Header>
            <Avatar src={profile.avatar_url} size="large" />
            <HeaderSection>
                <Title>{profile.name}</Title>
                <Text>{profile.bio}</Text>
                <div>
                    <GithubOutlined />
                    <a
                        href={profile ? profile?.blog : ''}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MiniText>{`@${profile.login}`}</MiniText>
                    </a>
                </div>
                <div>
                    <TeamOutlined />
                    <MiniText>{`${profile.followers} followers`}</MiniText>
                </div>
                <div>
                    <EnvironmentOutlined />
                    <MiniText>{profile.location}</MiniText>
                </div>
                <div>
                    <CodeOutlined />
                    <MiniText>
                        {`${profile.public_repos} repositories`}
                    </MiniText>
                </div>
                {profile?.blog ? (
                    <div>
                        <LinkOutlined />
                        <a
                            href={profile ? profile?.blog : ''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <MiniText>{profile.blog}</MiniText>
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </HeaderSection>
        </Header>
    )
}

export default ProfileHeader
