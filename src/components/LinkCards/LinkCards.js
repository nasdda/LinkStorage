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
    let renderedCols = [[], [], [], []]
    let j = 0
    for (let i = 0; i < renderedLinks.length; i++) {
        if (j > 3) {
            j = 0
        }
        renderedCols[j].push(renderedLinks[i])
        j++;
    }

    renderedCols = renderedCols.map((col, index) => (
        <Grid key={index} direction="column" spacing={2} container item lg={3} md={4} sm={6} xs={12}>
            {col}
        </Grid>
    ))


    return (
        <div className="outter">
            <Grid spacing={2} container>
                {renderedCols}
            </Grid>
        </div>
    )
}