import styled from 'styled-components'
import { Layout, Input, Typography as AntdTypography } from 'antd'
import { GithubOutlined as AntdGithubOutlined } from '@ant-design/icons'

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
export const Title = styled(AntdTypography.Title)`
    margin-top: 6px;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export const Container = styled.a`
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
`

export const GithubOutlined = styled(AntdGithubOutlined)`
    margin-right: 20px;
    margin-top: 5px;
    font-size: 32;
    color: #ffff;
`
