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
const useStyles = makeStyles((theme) => ({
    root: {
        height: 600,
        maxWidth: 1200,

        [theme.breakpoints.down('xs')]: {
            maxWidth: '360px',
            height: '200px',
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: '1800px',
            height: '900px',
        },
    },
    media: {
        height: 490,
        maxWidth: 1200,
        [theme.breakpoints.up('xl')]: {
            maxWidth: '1800px',
            height: '730px',
        },
        [theme.breakpoints.down('s')]: {
            maxWidth: '200px',
            height: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '360px',
            height: '145px',
        },
    },
    title: {
        [theme.breakpoints.up('xl')]: {
            fontSize: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
        },
    },
    type: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
            marginTop: '1px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '30px',
        },
    },
    info: {
        [theme.breakpoints.down('xs')]: {
            paddingTop: '4px',
        },
    },
    year: {
        fontSize: '11px',
        marginTop: '1px',
        [theme.breakpoints.up('xl')]: {
            fontSize: '30px',
        },
    },
}));

export default function ProjectsList() {
    const classes = useStyles();

    return (
        <div className='projects-cards-container'>
            {data.map((item) => {
                let projectName = `/ProjectsList/${item.title}`;
                return (
                    <Link
                        style={{
                            textDecoration: 'none',
                        }}
                        key={item._id}
                        to={projectName}>
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
                                            image={item.img}
                                            title='Contemplative Reptile'
                                            id='card-image'
                                        />
                                        <CardContent
                                            className={classes.info}
                                            id='card-info'>
                                            <div>
                                                <Typography
                                                    className={classes.title}
                                                    gutterBottom
                                                    variant='h5'
                                                    component='h2'>
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    className={classes.year}
                                                    variant='body2'
                                                    color='textSecondary'
                                                    component='p'>
                                                    {item.year}
                                                </Typography>
                                                <Typography
                                                    className={classes.type}
                                                    id='type'
                                                    variant='body2'
                                                    color='textSecondary'
                                                    component='p'>
                                                    {item.type}
                                                </Typography>
                                            </div>
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
