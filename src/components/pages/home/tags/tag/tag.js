import React, { useState } from "react";
import { connect } from 'react-redux'

import "./tag.css";

function Tag(props) {
  const [toggled, setToggled] = useState(props.toggledTags.has(props.type))
  let styles = ["tag"]
  if (props.clickable) {
    styles.push("clickable")
    if (toggled) {
      styles.push("toggled")
    }
  }


  styles = styles.join(' ')

  const clickHandler = event => {
    setToggled(!toggled)
    props.tagToggled(props.type)
  }

  return (
    <button className={styles} style={{ backgroundColor: props.bgColor }} onClick={clickHandler} disabled={!props.clickable}>
      {props.tagName}
    </button>
  )
};

const mapStateToProps = state => ({
  toggledTags: state.toggledTags
})

const mapDispatchToProps = dispatch => ({
  tagToggled: tagType => dispatch({ type: 'TAG_TOGGLED', tagType: tagType })
})

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
