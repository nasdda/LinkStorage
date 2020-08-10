import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx'

// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CopyIcon from '@material-ui/icons/FileCopyOutlined'

import './linkCard.css'

export default function MediaCard(props) {
    const [expand, setExpand] = useState(false)

    const useStyles = makeStyles(theme => ({
        root: {
            minWidth: 250,
            height: "100%"
        },
        media: { // image size should be 200 x 120
            width: 200,
            height: 120,
            margin: "auto"
        },
        content: {
            height: 80,
            overflowY: "hidden"
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        }
    }))
    const classes = useStyles();

    const handleExpandClick = () => {
        setExpand(!expand);
    };
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Tooltip title="copy link">
                    <IconButton aria-label="copy link">
                        <CopyIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="show description">
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expand,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expand}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <Typography variant="body1" component="p">
                    {props.description}
                </Typography>
            </Collapse>
        </Card >
    );
}