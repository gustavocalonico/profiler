import styled from 'styled-components'
import {
    Spin,
    Avatar as AntdAvatar,
    Typography,
    Empty as AntdEmpty,
} from 'antd'

export const Header = styled.div`
    display: flex;
    margin-bottom: 1vh;

    @media only screen and (max-width: 768px) {
        display: block;
    }
`
export const HeaderSection = styled.div`
    padding: 20px;
    padding-left: 0;
`

export const Avatar = styled(AntdAvatar)`
    margin: 20px;
    @media only screen and (max-width: 768px) {
        margin: auto;
        margin-right: 15vw;
        margin-left: 15vw;
    }
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
