import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProfile } from './profiles.hooks'

const ProfileComponent: React.FC = () => {
    const { userLogin } = useParams() as { userLogin: string }
    const { isLoading, profile } = useGetProfile(userLogin)

    console.log(profile)

    return <div>{userLogin}</div>
}

export default ProfileComponent
