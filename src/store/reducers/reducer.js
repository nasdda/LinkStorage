import links from '../../data/links'
import React from 'react'
import { Grid } from '@material-ui/core'
import LinkCard from '../../components/LinkCards/LinkCard/linkCard'

const initialState = {
    links: [...links],
    searchValue: "",
    renderedLinks: [],
    rendered: false,
    toggledTags: new Set()
}

const searchValueChange = (state, action) => {
    return {
        ...state,
        searchValue: action.event.target.value
    }
}

const searchSubmit = (state, action) => {
    const val = state.searchValue.trim().toLowerCase()
    let updatedLinks = links
    if (state.toggledTags.size !== 0) {
        updatedLinks = links.filter(link => link.tags.some(t => state.toggledTags.has(t)))
    }
    if (val) {
        updatedLinks = updatedLinks.filter(link => link.title.toLowerCase().includes(val))
    }
    return {
        ...state,
        links: updatedLinks,
        rendered: false
    }
}

const renderLinks = (state, action) => {
    const renderedLinks = state.links.map(link => (
        <LinkCard
            key={link.title}
            title={link.title}
            image={link.image}
            description={link.description}
            link={link.link}
            tags={link.tags}
        />
    ))
    const remaining = 4 - renderedLinks.size
    for(let i = 0; i < remaining; i++){
        renderedLinks.push(<div key={`dummy#${i}`} style={{width: 300, height: 200}}></div>)
    }
    return {
        ...state,
        renderedLinks,
        rendered: true
    }
}


const tagToggled = (state, action) => {
    const newToggledTags = new Set(state.toggledTags)
    if (newToggledTags.has(action.tagType)) {
        newToggledTags.delete(action.tagType)
    } else {
        newToggledTags.add(action.tagType)
    }

    const newLinks = (newToggledTags.size !== 0) ? links.filter(link => link.tags.some(t => newToggledTags.has(t))) : [...links]
    return {
        ...state,
        toggledTags: newToggledTags,
        links: newLinks,
        rendered: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_CHANGE': return searchValueChange(state, action);
        case 'RENDER_LINKS': return renderLinks(state, action);
        case 'SEARCH_SUBMIT': return searchSubmit(state, action);
        case 'TAG_TOGGLED': return tagToggled(state, action)
        default: return state;
    }
};

export default reducer;