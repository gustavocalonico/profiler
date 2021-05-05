import { Statistic } from 'antd'
import React, { ReactNode } from 'react'
import { IStatusUI } from '../../../../metadata/status'
import { Text, Card, List } from './languages.styles'

interface ILanguagesProps {
    status: IStatusUI[]
}

const Languages: React.FC<ILanguagesProps> = ({ status }) => {
    return (
        <List
            grid={{
                gutter: 20,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3,
            }}
            dataSource={status}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            renderItem={(item: any) => {
                const percentage = item.percentage ? item.percentage * 100 : '%'
                const repoText: string =
                    item.langRepoCount && item.langRepoCount > 1
                        ? ' repositories'
                        : ' repository'

                return (
                    <Card>
                        <List.Item>
                            <Statistic
                                title={item.language}
                                value={percentage}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="%"
                            />
                            <Text>
                                {item.langRepoCount.toString() + repoText}
                            </Text>
                        </List.Item>
                    </Card>
                ) as ReactNode
            }}
        />
    )
}

export default Languages
