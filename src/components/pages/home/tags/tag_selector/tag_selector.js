import React from 'react'

import Tag from '../tag/tag'
import tagStyles from '../tag_styles/tagStyles'

import './tag_selector.css'

function TagSelector(props) {
    const renderedTags = [];

    Object.keys(tagStyles).forEach(key => {
        renderedTags.push(<Tag
            key={tagStyles[key].tagName}
            tagName={tagStyles[key].tagName}
            bgColor={tagStyles[key].bgColor}
            type={parseInt(key)}
            clickable />)
    })

    return (
        <React.Fragment>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Include tags:</p>
            <div className="tag-selector">
                {renderedTags}
            </div>
        </React.Fragment>
    )
}

export default React.memo(TagSelector)