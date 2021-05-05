import {
    CodeOutlined,
    EnvironmentOutlined,
    GithubOutlined,
    LinkOutlined,
    TeamOutlined,
} from '@ant-design/icons'
import React from 'react'
import { IProfileUI } from '../../../../metadata/profile'
import Notes from '../notes'
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
            <Avatar
                src={profile.avatar_url}
                size={{ xs: 192, sm: 192, md: 192, lg: 192, xl: 240, xxl: 240 }}
            />
            <HeaderSection>
                <Title>{profile.name}</Title>
                <Text>{profile.bio}</Text>
                <HeaderSection>
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

                <div>
                    <Notes profileName={profile.login} />
                </div>
            </HeaderSection>
        </Header>
    )
}

export default ProfileHeader
