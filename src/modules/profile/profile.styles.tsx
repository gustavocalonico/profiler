import styled from 'styled-components'
import { Layout, Spin, Typography, Empty as AntdEmpty } from 'antd'

const { Content: AntContent } = Layout

export const Content = styled(AntContent)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 92vh;
    margin-left: 25vw;
    margin-right: 25vw;
`

export const Title = styled(Typography.Title)``

export const Text = styled(Typography.Text)``

export const MiniText = styled(Typography.Text)`
    padding-left: 10px;
`

export const CustomSpin = styled(Spin)`
    margin: auto;
    margin-top: 32vh;
`

export const Empty = styled(AntdEmpty)`
    margin-top: 32vh;
`
