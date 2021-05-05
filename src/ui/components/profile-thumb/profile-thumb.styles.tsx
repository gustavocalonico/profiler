import styled from 'styled-components'
import { Card as AntdCard, Avatar as AntdAvatar } from 'antd'

export const Card = styled(AntdCard)`
    width: 100%;
    :hover {
        cursor: pointer;
    }
`

export const Avatar = styled(AntdAvatar)`
    margin: 10px;
`
