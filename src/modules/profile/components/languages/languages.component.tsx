import { RadarChartOutlined } from '@ant-design/icons'
import { List, Statistic } from 'antd'
import Item from 'antd/lib/list/Item'
import React from 'react'
import { IStatusUI } from '../../../../metadata/status'
import { Text, Card } from './languages.styles'

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
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
            }}
            dataSource={status}
            renderItem={(item) => {
                const percentage = item.percentage ? item.percentage * 100 : '%'
                const repoText: string =
                    item.langRepoCount && item.langRepoCount > 1
                        ? ' repositories'
                        : ' repository'

                return (
                    <Card>
                        <List.Item>
                            <Statistic
                                title={
                                    item.language
                                        ? item.language
                                        : 'Undefined language'
                                }
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
                )
            }}
        />
    )
}

export default Languages
