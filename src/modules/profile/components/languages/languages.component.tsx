import { RadarChartOutlined } from '@ant-design/icons'
import { List, Statistic } from 'antd'
import React from 'react'
import { IStatusUI } from '../../../../metadata/status'
import { Text, Card } from './languages.styles'

interface ILanguagesProps {
    status: IStatusUI
}

const Languages: React.FC<ILanguagesProps> = ({ status }) => {
    return (
        <List
            grid={{ gutter: 20, column: 3 }}
            dataSource={status.languages}
            renderItem={(item, index) => {
                const percentage = status?.percentage
                    ? status?.percentage[index] * 100
                    : '%'
                const repoText: string =
                    status.langRepoCount[index] > 1
                        ? ' repositories'
                        : ' repository'

                return (
                    <Card>
                        <List.Item>
                            <Statistic
                                title={item}
                                value={percentage}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="%"
                            />
                            <Text>
                                {status.langRepoCount[index] + repoText}
                            </Text>
                        </List.Item>
                    </Card>
                )
            }}
        />
    )
}

export default Languages
