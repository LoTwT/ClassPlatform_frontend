import React, { useEffect, useState } from "react";
import { CategoryData, getCategory } from "../../models/category";

import Category from "./category";
import Searchbar from "./serchbar";
import User from "./user"

interface Props {
  categories: CategoryData[];
}

export default function Header(props: Props) {
  const [categories, setCategories] = useState(props.categories)

  useEffect(() => {
    if (!categories) {
      getCategory().then(data => {
        setCategories(data)
      })
    }
  }, [categories])

  return (
    <div className="g-header">
      <div className="page">
        <div className="left">
          <Logo />
          {categories ? (
            <Category categories={categories} />
          ) : ""}
          <Searchbar />
        </div>
        <div className="right">
          <Links />
          <User />
        </div>
      </div>
    </div>
  );
}


const Logo = () => (
  <a href="http://ke.qq.com/">
    <h1 className="logo">腾讯课堂</h1>
  </a>
)

const Links = () => (
  <>
    <a className="btn" href="http://ke.qq.com/">
      入驻/合作
        </a>
    <a className="btn" href="http://ke.qq.com/">
      急速版
        </a>
    <a className="btn" href="http://ke.qq.com/">
      客户端
        </a>
    <a className="btn" href="http://ke.qq.com/">
      私信
        </a>
  </>
)