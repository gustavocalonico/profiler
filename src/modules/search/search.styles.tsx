import styled from 'styled-components'
import { Layout, Spin } from 'antd'

const { Content: AntContent } = Layout

export const Content = styled(AntContent)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    min-height: 83vh;
    width: 100%;
    padding-right: 25vw;
    padding-left: 25vw;
    padding-top: 9vh;
    padding-bottom: 9vh;
    @media only screen and (max-width: 1200px) {
        padding-right: 15vw;
        padding-left: 15vw;
        padding-top: 9vh;
        padding-bottom: 9vh;
    }
    @media only screen and (max-width: 768px) {
        padding-right: 10vw;
        padding-left: 10vw;
        padding-top: 9vh;
        padding-bottom: 9vh;
    }
    @media only screen and (max-width: 600px) {
        padding-right: 5vw;
        padding-left: 5vw;
        padding-top: 3vh;
        padding-bottom: 3vh;
    }
`

export const CustomSpin = styled(Spin)`
    margin: auto;
    margin-top: 32vh;
`

export const SearchValuesContainer = styled.div`
    display: flex;
    justify-content: center;
`
