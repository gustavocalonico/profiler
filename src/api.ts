import axios from 'axios'
import { GITHUB_API } from './metadata/constants'

export const githubApi = axios.create({
    baseURL: GITHUB_API,
})

export const rawApi = axios.create()
