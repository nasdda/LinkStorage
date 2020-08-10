import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import Loader from '../Loader/loader'

import './LinkCards.css'

function LinkCards(props) {
    const [displayCols, setDisplayCols] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (props.rendered) {
            setDisplayCols(props.displayCols)
        } else {
            setLoading(true)
            props.renderLinks()
        }
        return () => {
            setLoading(false)
        }
    }, [props, props.rendered, displayCols])

    return (
        <div className="outter">
            {
                loading ? <div style={{ width: "100%", textAlign: "center" }}><Loader /></div> : (
                    <Grid spacing={2} container>
                        {displayCols}
                    </Grid>)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    displayCols: state.displayCols,
    rendered: state.rendered
})

const mapDispatchToProps = dispatch => ({
    renderLinks: () => dispatch({ type: "RENDER_LINKS" })
})

export default connect(mapStateToProps, mapDispatchToProps)(LinkCards)