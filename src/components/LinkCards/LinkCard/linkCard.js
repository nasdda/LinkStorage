import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './linkCard.css'
import { Hidden } from '@material-ui/core';

export default function MediaCard(props) {
    const [expand, setExpand] = useState(false)

    const useStyles = makeStyles({
        root: {
            minWidth: 200,
            height: 280
        },
        media: { // image size should be 200 x 120
            width: 200,
            height: 120,
            margin: "auto"
        },
        content: {
            height: 80,
            overflowY: "hidden"
        }
    })
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}