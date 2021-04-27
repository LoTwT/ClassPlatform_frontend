import axios from "../libs/axios"

export type SearchResult = string[]

export async function getHotKeywords(): Promise<SearchResult> {
    let { data } = await axios("/site/hot-keywords")
    return data
}

export async function getSuggest(keyword: string): Promise<SearchResult> {
    let { data } = await axios(`/site/suggest/${keyword}`)
    return data
}