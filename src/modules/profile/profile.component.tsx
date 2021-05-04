import React from 'react'
import { useParams } from 'react-router-dom'
import { HeaderComponent } from '../../ui/components'
import { useGetLangs, useGetProfile } from './profile.hooks'
import { Content, Empty, CustomSpin } from './profile.styles'
import { ProfileHeader, Languages } from './components'

const ProfileComponent: React.FC = () => {
    const { userLogin } = useParams() as { userLogin: string }
    const { isLoading: isLoadingProfile, profile } = useGetProfile(userLogin)
    const { isLoading: isLoadingLangs, langs } = useGetLangs(profile?.repos_url)

    if (isLoadingProfile || isLoadingLangs) {
        return (
            <Content>
                <CustomSpin size="large" />
            </Content>
        )
    }

    return (
        <>
            <HeaderComponent />
            {!profile || !langs ? (
                <Content>
                    <Empty description={<span>User not found!</span>} />
                </Content>
            ) : (
                <Content>
                    <ProfileHeader profile={profile} />
                    <Languages status={langs} />
                </Content>
            )}
        </>
    )
}

export default ProfileComponent
