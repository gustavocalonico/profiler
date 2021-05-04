import styled from 'styled-components'
import {
    Layout,
    Input,
    Typography as AntdTypography,
    Button as AntdButton,
} from 'antd'

const { Header: AntHeader } = Layout
const { Search: AntSearch } = Input

export const Header = styled(AntHeader)`
    display: flex;
    width: 100%;
    height: 8vh;
    justify-content: space-between;
`

export const Search = styled(AntSearch)`
    margin-top: auto;
    margin-bottom: auto;
    width: 250px;
`
export const Typography = styled(AntdTypography)``

export const Button = styled(AntdButton)`
    margin-top: auto;
    margin-bottom: auto;
`
