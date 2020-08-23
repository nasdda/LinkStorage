import React from 'react'
import { connect } from 'react-redux'
import { Button } from "@material-ui/core";
import './navbuttons.css'
function NavButtons(props) {
<<<<<<< HEAD
=======
    const style = {
        marginBottom: 30,
        width: 120,
        height: 50,
        fontSize: 24
    }

>>>>>>> 3b001c13f68066872f98d9c8e32c9d702164217f
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="nav-buttons">
            <Button variant="contained"
<<<<<<< HEAD
                style={
                    {
                        marginBottom: 30,
                        width: 120,
                        height: 50,
                        fontSize: 24
                    }
                }
=======
                style={style}
>>>>>>> 3b001c13f68066872f98d9c8e32c9d702164217f
                onClick={event => {
                    props.onPrevPage()
                    toTop()
                }}
            >prev</Button>

            <Button variant="contained"
<<<<<<< HEAD
                style={
                    {
                        marginBottom: 30,
                        width: 120,
                        height: 50,
                        fontSize: 24
                    }
                }
=======
                style={style}
>>>>>>> 3b001c13f68066872f98d9c8e32c9d702164217f
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