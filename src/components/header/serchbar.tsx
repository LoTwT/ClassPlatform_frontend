import React, { useState, useEffect } from "react";
import { appData } from "../../models/app"
import { SearchResult, getHotKeywords, getSuggest } from "../../models/search";

export default function Searchbar() {
    const [hotKeywords, setHotKeywords] = useState<SearchResult | undefined>(appData?.hotKeywords)
    const [suggest, setSuggest] = useState<SearchResult | undefined>()
    const [showList, setShowList] = useState<boolean>(false)
    const [inputKeyword, setInputKeyword] = useState<string>("")

    useEffect(() => {
        if (!hotKeywords) {
            getHotKeywords().then(data => {
                setHotKeywords(data)
            })
        }
    }, [hotKeywords])

    useEffect(() => {
        if (!inputKeyword) setSuggest(undefined)
        else {
            getSuggest(inputKeyword).then(data => {
                setSuggest(data)
            })
        }
    }, [inputKeyword])

    const keywords = suggest || hotKeywords

    return (
        <div className="searchbar">
            <div className="search">
                <i className="type">课程</i>
                <input
                    className="keyword"
                    type="text"
                    placeholder="搜索课程"
                    onFocus={ev => setShowList(true)}
                    onBlur={ev => setShowList(false)}
                    onInput={ev => setInputKeyword((ev.target as HTMLInputElement).value)}
                />
                <div className="btn">
                    <i className="icon icon-search-w" />
                </div>
            </div>
            {showList && keywords && keywords.length > 0 ? (
                <div className="list">
                    {!suggest ? (
                        <div className="title">热门搜索</div>
                    ) : ""}
                    <ul>
                        {keywords.map((keyword, index) => (
                            <li key={index}>{keyword}</li>
                        ))}
                    </ul>
                </div>
            ) : ""}
        </div>
    );
}
