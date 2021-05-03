/* eslint-disable camelcase */
export interface IProfileSearch {
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: string
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    score: string
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}

export interface IProfile {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: false
    name: string
    company: null
    blog: string
    location: string
    email: null
    hireable: true
    bio: string
    twitter_username: null
    public_repos: string
    public_gists: string
    followers: string
    following: string
    created_at: string
    updated_at: string
}

export type IProfileSearchUI = Readonly<IProfileSearch>
export type IProfileUI = Readonly<IProfile>
