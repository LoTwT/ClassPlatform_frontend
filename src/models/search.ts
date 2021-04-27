import axios from "../libs/axios"

export type SearchResult = string[]

export async function getHotKeywords(): Promise<SearchResult> {
    let { data } = await axios("/site/hot-keywords")
    return data
}