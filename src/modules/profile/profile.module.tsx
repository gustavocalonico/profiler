import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProfileComponent from './profile.page'

const ProfileModule: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/:userLogin" component={ProfileComponent} />
        </Switch>
    )
}

export default ProfileModule
