import React from 'react'
import { Grid } from '@material-ui/core'
import LinkCard from './LinkCard/linkCard'

import './LinkCards.css'

import links from '../../data/links'


export default function (props) {
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
    const cardPerCol = Math.ceil(renderedLinks.length / 4)
    let start = 0, end = cardPerCol;
    const renderedCols = []

    for (let i = 0; i < 4; i++) {
        renderedCols.push((
            <Grid key={i} direction="column" spacing={2} container item lg={3} md={4} sm={6} xs={12}>
                {renderedLinks.slice(start, end)}
            </Grid>
        ))
        start = end
        end += cardPerCol
    }

    return (
        <div className="outter">
            <Grid spacing={2} container>
                {renderedCols}
            </Grid>
        </div>
    )
}