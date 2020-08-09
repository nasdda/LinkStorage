import React from 'react'

import Tag from '../tag/tag'
import * as tagTypes from '../tagTypes'

import './tag_selector.css'

function TagSelector(props) {
    const tags = [
        { tagName: "Algorithm", bgColor: "#d63c0d", type: tagTypes.ALGORITHM },
        { tagName: "Article", bgColor: "#5f00ad", type: tagTypes.ARTICLE },
        { tagName: "C++", bgColor: "#8f0383", type: tagTypes.CPP },
        { tagName: "Database", bgColor: "#1c7a60", type: tagTypes.DATABASE},
        { tagName: "Java", bgColor: "#592d00", type: tagTypes.JAVA },
        { tagName: "Javascript", bgColor: "#b3ad00", type: tagTypes.JAVASCRIPT },
        { tagName: "Kotlin", bgColor: "#3e2294", type: tagTypes.KOTLIN},
        { tagName: "LeetCode", bgColor: "#bf912e", type: tagTypes.LEETCODE },
        { tagName: "Node.js", bgColor: "#018001", type: tagTypes.NODEJS },
        { tagName: "Python", bgColor: "#004cc7", type: tagTypes.PYTHON },
        { tagName: "React.js", bgColor: "#1f5ded", type: tagTypes.REACTJS },
        { tagName: "Site", bgColor: "#005878", type: tagTypes.SITE },
        { tagName: "Video", bgColor: "#ba0707", type: tagTypes.VIDEO }
    ]

    const renderedTags = tags.map(tag => (
        <Tag key={tag.tagName} tagName={tag.tagName} bgColor={tag.bgColor} type={tag.type} />
    ))

    return (
        <React.Fragment>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Include tags:</p>
            <div className="tag-selector">
                {renderedTags}
            </div>
        </React.Fragment>
    )
}

export default TagSelector