import React from 'react'

import Tag from '../tag/tag'
import './tag_selector.css'

function TagSelector(props) {
    const tags = [
        { tagName: "Algorithm", bgColor: "#d63c0d" },
        { tagName: "Article", bgColor: "#5f00ad" },
        { tagName: "C++", bgColor: "#8f0383" },
        { tagName: "Java", bgColor: "#592d00" },
        { tagName: "Javascript", bgColor: "#b3ad00" },
        { tagName: "LeetCode", bgColor: "#bf912e" },
        { tagName: "Node.js", bgColor: "#018001" },
        { tagName: "Python", bgColor: "#004cc7" },
        { tagName: "React.js", bgColor: "#1f5ded" },
        { tagName: "Site", bgColor: "#005878" },
        { tagName: "Video", bgColor: "#ba0707" }
    ]

    const renderedTags = tags.map(tag => (
        <Tag key={tag.tagName} tagName={tag.tagName} bgColor={tag.bgColor} />
    ))

    return (
        <React.Fragment>
            <p style={{ fontWeight: "bold" }}>Include tags:</p>
            <div className="tag-selector">
                {renderedTags}
            </div>
        </React.Fragment>
    )
}

export default TagSelector