import React from 'react'
import { useParams } from 'react-router-dom'
import {
    TeamOutlined,
    EnvironmentOutlined,
    LinkOutlined,
    CodeOutlined,
    GithubOutlined,
} from '@ant-design/icons'
import { HeaderComponent } from '../../ui/components'
import { useGetProfile } from './profile.hooks'
import {
    Content,
    Header,
    Avatar,
    Title,
    Text,
    Empty,
    CustomSpin,
    HeaderSection,
    MiniText,
} from './profile.styles'

const ProfileComponent: React.FC = () => {
    const { userLogin } = useParams() as { userLogin: string }
    const { isLoading, profile } = useGetProfile(userLogin)

    console.log(profile)

    if (isLoading) {
        return (
            <Content>
                <CustomSpin size="large" />
            </Content>
        )
    }

    return (
        <>
            <HeaderComponent />
            {!profile ? (
                <Content>
                    <Empty description={<span>User not found!</span>} />
                </Content>
            ) : (
                <Content>
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
                                <MiniText>
                                    {`${profile.followers} followers`}
                                </MiniText>
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
                </Content>
            )}
        </>
    )
}

export default ProfileComponent
