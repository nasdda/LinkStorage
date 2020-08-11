import links from '../../data/links'
import React from 'react'
import { Grid } from '@material-ui/core'
import LinkCard from '../../components/LinkCards/LinkCard/linkCard'

const initialState = {
    links: [...links],
    searchValue: "",
    renderedLinks: [],
    renderedCols: [],
    displayCols: [],
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
    if (val) {
        const updatedLinks = links.filter(link => link.title.toLowerCase().includes(val))

        return {
            ...state,
            links: updatedLinks,
            rendered: false
        }
    }
    return {
        ...state,
        links: [...links],
        rendered: false
    }
}

const renderLinks = (state, action) => {
    const renderedLinks = state.links.map(link => (
        <Grid key={link.title} item>
            <LinkCard
                title={link.title}
                image={link.image}
                description={link.description}
                link={link.link}
                tags={link.tags}
            />
        </Grid>
    ))
    // create 4 grids with flex-direction cols
    const renderedCols = [[], [], [], []]
    let j = 0
    for (let i = 0; i < renderedLinks.length; i++) {
        if (j > 3) j = 0
        renderedCols[j].push(renderedLinks[i])
        j++;
    }
    for (let i = 0; i < renderedLinks.length % 4; i++) {
        if (j > 3) j = 0
        renderedCols[j].push(
            <Grid key={`dummygrid-${i}`} style={{ minWidth: 250, margin: "0 20px 0 20px" }} item />
        )
        j++;
    }

    const displayCols = renderedCols.map((col, index) => (
        <Grid key={index} direction="column" spacing={2} container item lg={3} md={4} sm={6} xs={12}>
            {col}
        </Grid>
    ))

    return {
        ...state,
        renderedLinks,
        renderedCols,
        displayCols,
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