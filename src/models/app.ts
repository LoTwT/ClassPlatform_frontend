import { CategoryData } from "./category";

export interface AppData {
    categories: CategoryData[] | undefined
}

export let appData: AppData = {
    categories: undefined,
}

export function setAppData(data: AppData): void {
    appData = data
}