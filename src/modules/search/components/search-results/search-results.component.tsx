import React from 'react'
import { IProfileUI } from '../../../../metadata/profile'
import { Empty } from './search-results.styles'

interface ISearchResultsProps {
    profiles: IProfileUI[]
}

const SearchResults: React.FC<ISearchResultsProps> = ({ profiles }) => {
    return (
        <>
            {profiles.length === 0 ? (
                <Empty
                    description={<span>Try searching for a Github user!</span>}
                />
            ) : (
                <div>{profiles.map((item) => item.login)}</div>
            )}
        </>
    )
}

export default SearchResults
