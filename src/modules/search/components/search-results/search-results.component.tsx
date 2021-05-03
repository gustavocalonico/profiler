import { List } from 'antd'
import React from 'react'
import { IProfileUI } from '../../../../metadata/profile'
import ProfileThumbComponent from '../../../../ui/components/profile-thumb'
import { Container, Empty } from './search-results.styles'

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
                <Container>
                    <List
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={profiles}
                        renderItem={(item) => (
                            <List.Item>
                                <ProfileThumbComponent profile={item}>
                                    Card content
                                </ProfileThumbComponent>
                            </List.Item>
                        )}
                    />
                </Container>
            )}
        </>
    )
}

export default SearchResults
