import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { SearchPage } from './pages'

const SearchComponent: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={SearchPage} />
        </Switch>
    )
}

export default SearchComponent
