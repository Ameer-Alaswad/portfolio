import data from './projects.json';
import { Link } from 'react-router-dom';
import './ProjectsList.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    media: {
        height: 300,
        maxWidth: 800,
    },
});

export default function ProjectsList() {
    // console.log(`props`, props);
    // const { year, title, img, type, technologies, bgColor, _id } = data;
    const classes = useStyles();
    // console.log('year :', year);

    return (
        <div className='projects-cards-container'>
            {data.map((item) => {
                let projectName = `/ProjectsList/${item.title}`;
                return (
                    <Link key={item._id} to={projectName}>
                        <ScrollAnimation
                            default={false}
                            animateOnce
                            animateIn={
                                item._id % 2 === 0
                                    ? 'fadeInLeftBig'
                                    : 'fadeInRightBig'
                            }>
                            <div className='projects-cards'>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image='/image.jpeg'
                                            title='Contemplative Reptile'
                                            id='card-image'
                                        />
                                        <CardContent id='card-info'>
                                            <div>
                                                <Typography
                                                    gutterBottom
                                                    variant='h5'
                                                    component='h2'>
                                                    <p>{item.title}</p>
                                                </Typography>
                                                <Typography
                                                    variant='body2'
                                                    color='textSecondary'
                                                    component='p'>
                                                    {item.year}
                                                </Typography>
                                                <Typography
                                                    variant='body2'
                                                    color='textSecondary'
                                                    component='p'>
                                                    {item.type}
                                                </Typography>
                                            </div>
                                            <div>
                                                <div className='technologies'>
                                                    {item.technologies.map(
                                                        (tech) => {
                                                            return (
                                                                <img
                                                                    alt={tech}
                                                                    id='icons-image'
                                                                    src={tech}
                                                                    key={tech}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </ScrollAnimation>
                    </Link>
                );
            })}
        </div>
    );
}
