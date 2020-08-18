import links from '../../data/links'
import React from 'react'
import LinkCard from '../../components/LinkCards/LinkCard/linkCard'

const LINKS_PER_PAGE = 16

const initialState = {
    links: [...links],
    searchValue: "",
    renderedLinks: [],
    rendered: false,
    toggledTags: new Set(),
    page: 1
}


const getLinksRange = (state) => {
    return {
        start: (state.page - 1) * LINKS_PER_PAGE,
        end: state.page * LINKS_PER_PAGE
    }
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
        rendered: false,
        page: 1
    }
}

const renderLinks = (state, action) => {
    const { start, end } = getLinksRange(state)
    const displayedLinks = state.links.slice(start, end)
    const renderedLinks = displayedLinks.map(link => (
        <LinkCard
            key={link.title}
            title={link.title}
            image={link.image}
            description={link.description}
            link={link.link}
            tags={link.tags}
        />
    ))
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
        rendered: false,
        page: 1
    }
}


const nextPage = (state, action) => {
    const temp = Object.keys(state.links).length / LINKS_PER_PAGE
    const LAST_PAGE = Math.ceil(temp) == temp ? temp - 1 : Math.ceil(temp) 
    if (state.page >= LAST_PAGE) {
        return {
            ...state
        }
    }
    return {
        ...state,
        page: state.page + 1,
        rendered: false
    }
}

const prevPage = (state, action) => {
    if (state.page <= 1) {
        return {
            ...state
        }
    }
    return {
        ...state,
        page: state.page - 1,
        rendered: false
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_CHANGE': return searchValueChange(state, action);
        case 'RENDER_LINKS': return renderLinks(state, action);
        case 'SEARCH_SUBMIT': return searchSubmit(state, action);
        case 'TAG_TOGGLED': return tagToggled(state, action);
        case 'NEXT_PAGE': return nextPage(state, action);
        case 'PREV_PAGE': return prevPage(state, action)
        default: return state;
    }
};

export default reducer;