import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx'

// icons
import { ReactComponent as ExpandMoreIcon } from './Icons/expand.svg';
import { ReactComponent as Copy } from './Icons/copy.svg'

import './linkCard.css'

export default function MediaCard(props) {
    const [expand, setExpand] = useState(false)

    const useStyles = makeStyles(theme => ({
        root: {
            minWidth: 250
        },
        media: { // image size should be 200 x 120
            width: 160,
            height: 120,
            margin: "auto",
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

    const copyLink = () => {
        const el = document.createElement('textarea');
        el.value = props.link;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    return (
        <Card className={classes.root}>
            <CardActionArea target="_blank" href={props.link} component="a">
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent >
                    <Typography variant="h5" component="h2" align="center" style={{ marginBottom: "0" }}>
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: "center" }}>
                <Tooltip title="copy link">
                    <IconButton
                        aria-label="copy link"
                        onClick={copyLink}>
                        <Copy />
                    </IconButton>
                </Tooltip>
                <Tooltip title={expand ? "hide description" : "show description"}>
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
                <Typography variant="body1" component="p" style={{ margin: "10px" }}>
                    {props.description}
                </Typography>
            </Collapse>
        </Card >
    );
}