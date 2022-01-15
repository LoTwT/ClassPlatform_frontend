import axios from "../libs/axios"

export interface BannerData {
  ID: number
  img: string
  href: string
  color: string
}

export async function getAllBanner(): Promise<Array<BannerData>> {
  let { data } = await axios("/site/banners")
  return data
}
