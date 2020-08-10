import React from 'react'
import { Grid } from '@material-ui/core'
import LinkCard from './LinkCard/linkCard'

import './LinkCards.css'

// images
import site from "../../Thumbnails/site.png"
import video from "../../Thumbnails/video.png"
import article from "../../Thumbnails/article.png"
import leetcode from "../../Thumbnails/leetcode.png"
import tool from "../../Thumbnails/tool.png"


export default function (props) {
    return (
        <div className="outter">
            <Grid spacing={2} container>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                    <LinkCard
                        title="Techie Delight"
                        image={site}
                        description="A helpful site containing plethora of algorithm problems with solutions."
                    />
                </Grid>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                    <LinkCard
                        title="Good Tool"
                        image={tool}
                        description="Tool for doing so and so. Very efficient."
                    />
                </Grid>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                    <LinkCard
                        title="Video"
                        image={video}
                        description="A helpful video."
                    />
                </Grid>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                    <LinkCard
                        title="React Documentary"
                        image={site}
                        description="Documentary of React."
                    />
                </Grid>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                    <LinkCard
                        title="DFS Problem"
                        image={leetcode}
                        description="A worthwhile problem which deals which is best solved using DFS."
                    />
                </Grid>
                <Grid item lg={2} md={4} sm={6} xs={12}>
                    <LinkCard
                        title="Article"
                        image={article}
                        description="Fun article to read."
                    />
                </Grid>
            </Grid>
        </div>
    )
}