import React from "react"
import Header from "../components/header/header"
import Banner from "../components/index/banner"
import { setAppData, AppData } from "../models/app"

interface Props {
  appData?: AppData
}

function Home(props: Props) {
  props.appData && setAppData(props.appData)

  return (
    <>
      <Header />
      <Banner />
    </>
  )
}

export default Home
