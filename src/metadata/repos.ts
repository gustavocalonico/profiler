/* eslint-disable camelcase */

export interface IRepo {
    created_at: string
    updated_at: string
    pushed_at: string
    git_url: string
    ssh_url: string
    clone_url: string
    svn_url: string
    homepage: string
    size: number
    stargazers_count: number
    watchers_count: number
    language: string
    has_issues: boolean
    has_projects: boolean
    has_downloads: boolean
    has_wiki: boolean
    has_pages: boolean
    forks_count: number
    mirror_url: string
    archived: boolean
    disabled: boolean
    open_issues_count: number
    license: string
    forks: number
    open_issues: number
    watchers: number
    default_branch: string
}

export type IRepoUI = Readonly<IRepo>
