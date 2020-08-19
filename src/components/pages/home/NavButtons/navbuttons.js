import React from 'react'
import { connect } from 'react-redux'
import { Button } from "@material-ui/core";
import './navbuttons.css'
function NavButtons(props) {
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

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
                onClick={event => {
                    props.onPrevPage()
                    toTop()
                }}
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
                onClick={event => {
                    props.onNextPage()
                    toTop()
                }}
            >Next</Button>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onNextPage: () => dispatch({ type: "NEXT_PAGE" }),
        onPrevPage: () => dispatch({ type: "PREV_PAGE" })
    }
}

export default React.memo(connect(null, mapDispatchToProps)(NavButtons))