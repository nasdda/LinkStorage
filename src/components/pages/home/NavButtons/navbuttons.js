import React from 'react'
import { connect } from 'react-redux'
import { Button } from "@material-ui/core";
import './navbuttons.css'
function NavButtons(props) {
    return (
        <div className="nav-buttons">
            <Button variant="contained"
                style={
                    {
                        marginBottom: 30,
                        width: 120,
                        height: 50,
                        fontSize: 24
                    }
                }
                onClick={props.onPrevPage}
            >prev</Button>

            <Button variant="contained"
                style={
                    {
                        marginBottom: 30,
                        width: 120,
                        height: 50,
                        fontSize: 24
                    }
                }
                onClick={props.onNextPage}
            >Next</Button>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onNextPage: event => dispatch({ type: "NEXT_PAGE" }),
        onPrevPage: event => dispatch({ type: "PREV_PAGE" })
    }
}

export default React.memo(connect(null, mapDispatchToProps)(NavButtons))