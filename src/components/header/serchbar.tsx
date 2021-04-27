import React, { useState, useEffect } from "react";
import { appData } from "../../models/app"
import { SearchResult, getHotKeywords } from "../../models/search";

export default function Searchbar() {
    const [hotKeywords, setHotKeywords] = useState<SearchResult | undefined>(appData?.hotKeywords)

    useEffect(() => {
        if (!hotKeywords) {
            getHotKeywords().then(data => {
                setHotKeywords(data)
            })
        }
    }, [hotKeywords])

    return (
        <div className="searchbar">
            <div className="search">
                <i className="type">课程</i>
                <input className="keyword" type="text" placeholder="搜索课程" />
                <div className="btn">
                    <i className="icon icon-search-w" />
                </div>
            </div>
            <div className="list">
                <div className="title">热门搜索</div>
                {hotKeywords ? (
                    <ul>
                        {hotKeywords.map((keyword, index) => (
                            <li key={index}>{keyword}</li>
                        ))}
                    </ul>
                ) : ""}

            </div>
        </div>
    );
}
