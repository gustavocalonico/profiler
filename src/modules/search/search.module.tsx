import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchPage from './search.page'

const SearchComponent: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={SearchPage} />
        </Switch>
    )
}

export default SearchComponent
