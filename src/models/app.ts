import { CategoryData } from "./category"
import { SearchResult } from "./search"
import { BannerData } from "./banner"

export interface AppData {
  categories?: CategoryData[]
  hotKeywords?: SearchResult
  banners?: BannerData[]
}

export function setAppData(data: AppData): void {
  appData = data
}

export let appData: AppData
if (typeof window != "undefined") {
  appData = (window as any).appData
} else {
  appData = {}
}
