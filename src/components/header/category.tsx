import React from "react";
import { CategoryData } from "../../models/category";

interface Props {
    categories: CategoryData[]
}

export default function Category(props: Props) {
    return (
        <div className="category">
            <div className="title-container">
                <i className="icon icon-menu" />
                <span>分类</span>
            </div>
            <div className="list-container">
                <ul className="list">
                    {props.categories.map(category => (
                        <li key={category.ID}>
                            <div className="content">
                                <div className="title">{category.title}</div>
                                <div className="sub-title">
                                    {category.items ? (<ul>
                                        {category.items.map(item => (
                                            <li key={item.ID}>{item.title}</li>
                                        ))}
                                    </ul>) : ""}
                                </div>
                            </div>
                            <div className="sub-list">
                                {category.children ? (<ul className="sub-list-ul">
                                    {category.children.map(child => (
                                        <li className="sub-list-li" key={child.ID}>
                                            <div className="main">{child.title}</div>
                                            <div className="list">
                                                {child.items ? (
                                                    <ul>
                                                        {child.items.map(item => (
                                                            <li key={item.ID}>{item.title}</li>
                                                        ))}
                                                    </ul>
                                                ) : ""}
                                            </div>
                                        </li>
                                    ))}
                                </ul>) : ""}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
