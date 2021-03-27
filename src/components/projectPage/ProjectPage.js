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
        maxWidth: 800,
    },
    media: {
        height: 300,
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
        <a href={demo}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title='Contemplative Reptile'
                        id='card-image'
                    />
                    <CardContent id='card-info'>
                        <div>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='h2'>
                                <p>{title}</p>
                            </Typography>
                            <Typography
                                variant='body2'
                                color='textSecondary'
                                component='p'>
                                {year}
                            </Typography>
                            <Typography
                                variant='body2'
                                color='textSecondary'
                                component='p'>
                                {type}
                            </Typography>
                            <Typography
                                variant='body2'
                                color='textSecondary'
                                component='p'>
                                {description}
                            </Typography>
                        </div>
                        <div>
                            <div>
                                {/* <img
                                            alt={tech}
                                            id='icons-image'
                                            src={tech}
                                            key={tech}
                                        /> */}
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    );
}
