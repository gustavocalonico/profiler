import styled from 'styled-components'
import {
    Spin,
    Avatar as AntdAvatar,
    Typography,
    Empty as AntdEmpty,
} from 'antd'

export const Header = styled.div`
    display: flex;
    margin-bottom: 5vh;
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
