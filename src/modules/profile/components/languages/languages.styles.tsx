import { Typography, Card as AntdCard, List as AntdList } from 'antd'
import styled from 'styled-components'

export const Container = styled.div`
    margin-right: 10vw;
    margin-left: 10vw;
    margin-top: 6vh;
    margin-bottom: 2vh;
`

export const Text = styled(Typography.Text)``

export const Card = styled(AntdCard)`
    margin: 10px;
`

export const List = styled(AntdList)`
    @media only screen and (min-width: 768px) {
        min-width: 20vw;
        max-width: 100vw;
    }
`
