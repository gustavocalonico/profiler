/* eslint-disable camelcase */
interface IProfile {
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

export type IProfileUI = Readonly<IProfile>
