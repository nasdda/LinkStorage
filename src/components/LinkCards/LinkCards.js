import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import Loader from '../Loader/loader'

import './LinkCards.css'

function LinkCards(props) {
    const [displayCols, setDisplayCols] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log("HERE", loading)

    useEffect(() => {
        if (props.rendered) {
            setDisplayCols(props.displayCols)
        } else {
            props.renderLinks()
            return () => {
                setLoading(true)
            }
        }
        return () => {
            setLoading(false)
        }
    }, [props, displayCols])

    return (
        <div className="outter">
            {
                loading ? <div style={{ width: "100%", textAlign: "center" }}><Loader /></div> : (
                    <Grid spacing={2} justify="center" container>
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