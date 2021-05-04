import React from 'react'
import { useParams } from 'react-router-dom'
import { HeaderComponent } from '../../ui/components'
import { useGetProfile } from './profile.hooks'
import { Content } from './profile.styles'

const ProfileComponent: React.FC = () => {
    const { userLogin } = useParams() as { userLogin: string }
    const { isLoading, profile } = useGetProfile(userLogin)

    return (
        <>
            <HeaderComponent profile={profile} />
            <Content />
            <div>{profile.login}</div>
        </>
    )
}

export default ProfileComponent
