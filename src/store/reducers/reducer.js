import links from '../../data/links'
const initialState = {
    links: links,
    searchValue: ""
}

const searchValueChange = (state, action) => {
    return {
        ...state,
        searchValue: action.event.target.value
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_CHANGE': return searchValueChange(state, action);
        default: return state;
    }
};

export default reducer;