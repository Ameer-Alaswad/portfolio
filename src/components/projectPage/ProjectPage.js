import React from 'react';
import data from '../portfolio/projects.json';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 1000,
    },
    media: {
        height: 700,
        maxWidth: 800,
    },
});
export default function ProjectPage() {
    const projectName = useParams().project;
    const {
        _id,
        year,
        title,
        description,
        img,
        type,
        github,
        demo,
    } = data.find((project) => {
        return project.title === projectName;
    });
    const classes = useStyles();
    return (
        <a
            style={{
                textDecoration: 'none',
            }}
            href={demo}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image='/image.jpeg'
                        title='Contemplative Reptile'
                        id='card-image'
                    />
                    <CardContent
                        style={{ padding: '0' }}
                        id='card-info'></CardContent>
                </CardActionArea>
            </Card>
        </a>
    );
}
