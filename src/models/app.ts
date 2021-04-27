import { CategoryData } from "./category";
import { SearchResult } from "./search"

export interface AppData {
    categories: CategoryData[] | undefined;
    hotKeywords: SearchResult | undefined;
}


export function setAppData(data: AppData): void {
    appData = data
}

export let appData: AppData
if (typeof window != "undefined") {
    appData = (window as any).appData
} else {
    appData = {
        categories: undefined,
        hotKeywords: undefined
    }
}