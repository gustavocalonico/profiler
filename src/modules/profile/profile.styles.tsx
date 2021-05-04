import styled from 'styled-components'
import { Layout, Spin } from 'antd'

const { Content: AntContent } = Layout

export const Content = styled(AntContent)`
    display: flex;
    height: 92vh;
    justify-content: center;
`

export const CustomSpin = styled(Spin)`
    margin: auto;
    margin-top: 32vh;
`
