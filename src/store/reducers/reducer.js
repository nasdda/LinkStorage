import links from '../../data/links'
import React from 'react'
import { Grid } from '@material-ui/core'
import LinkCard from '../../components/LinkCards/LinkCard/linkCard'

const initialState = {
    links: links,
    searchValue: "",
    renderedLinks: [],
    renderedCols: [],
    displayCols: [],
    rendered: false
}

const searchValueChange = (state, action) => {
    return {
        ...state,
        searchValue: action.event.target.value
    }
}

const searchSubmit = (state, action) => {
    if(state.searchValue.trim()){
        
    }
}

const renderLinks = (state, action) => {
    const renderedLinks = links.map(link => (
        <Grid key={link.title} item>
            <LinkCard
                title={link.title}
                image={link.image}
                description={link.description}
                link={link.link}
            />
        </Grid>
    ))
    // create 4 grids with flex-direction cols
    const renderedCols = [[], [], [], []]
    let j = 0
    for (let i = 0; i < renderedLinks.length; i++) {
        if (j > 3) {
            j = 0
        }
        renderedCols[j].push(renderedLinks[i])
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


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_CHANGE': return searchValueChange(state, action);
        case 'RENDER_LINKS': return renderLinks(state, action)
        default: return state;
    }
};

export default reducer;