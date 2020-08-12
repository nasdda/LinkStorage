import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/loader'
import Masonry from 'react-masonry-component'

import './LinkCards.css'

const masonryOptions = {
    transitionDuration: "0.5s",
    fitWidth: true
};

function LinkCards(props) {
    const [renderedLinks, setRenderedLinks] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (props.rendered) {
            setRenderedLinks(props.displayCols)
        } else {
            props.renderLinks()
        }
        return () => {
            setLoading(false)
        }
    }, [props, renderedLinks])

    return (
        <div className="outter">
            {
                loading ? <Loader /> : (
                    <Masonry options={masonryOptions} enableResizableChildren style={{ margin: "auto" }}>
                        {renderedLinks}
                    </Masonry>

                )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    displayCols: state.renderedLinks,
    rendered: state.rendered
})

const mapDispatchToProps = dispatch => ({
    renderLinks: () => dispatch({ type: "RENDER_LINKS" })
})

export default connect(mapStateToProps, mapDispatchToProps)(LinkCards)