import styled from 'styled-components'
import {
    Layout,
    Spin,
    Avatar as AntdAvatar,
    Typography,
    Empty as AntdEmpty,
} from 'antd'

const { Content: AntContent } = Layout

export const Content = styled(AntContent)`
    display: flex;
    height: 92vh;
    justify-content: center;
    padding-top: 5vh;
    padding-bottom: 2vh;
`

export const Header = styled.div`
    display: flex;
`
export const HeaderSection = styled.div`
    padding: 20px;
`

export const Avatar = styled(AntdAvatar)`
    height: 25vh;
    width: 25vh;
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