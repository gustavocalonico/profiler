import { List } from 'antd'
import React from 'react'
import { IProfileSearchUI } from '../../../../metadata/profile'
import ProfileThumbComponent from '../../../../ui/components/profile-thumb'
import { Container, Empty } from './search-results.styles'

interface ISearchResultsProps {
    profiles: IProfileSearchUI[]
}

const SearchResults: React.FC<ISearchResultsProps> = ({ profiles }) => {
    return (
        <>
            {profiles.length === 0 ? (
                <Empty
                    description={<span>Try searching for a Github user!</span>}
                />
            ) : (
                <Container>
                    <List
                        grid={{
                            gutter: 20,
                            xs: 1,
                            sm: 1,
                            md: 3,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }}
                        dataSource={profiles}
                        renderItem={(item) => (
                            <List.Item>
                                <ProfileThumbComponent profile={item} />
                            </List.Item>
                        )}
                    />
                </Container>
            )}
        </>
    )
}

export default SearchResults
