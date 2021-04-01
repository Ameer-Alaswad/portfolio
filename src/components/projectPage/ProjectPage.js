import React from 'react';
import data from '../portfolio/projects.json';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1400,
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: '900px',
            height: '630px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '600px',
            height: '500px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '350px',
            height: '300px',
        },
    },
    media: {
        height: 720,
        [theme.breakpoints.down('md')]: {
            height: '630px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '500px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '350px',
            height: '300px',
        },
    },
    button: {
        width: 76,
    },
}));
export default function ProjectPage() {
    const projectName = useParams().project;
    const { _id, year, title, description, img, github, demo } = data.find(
        (project) => {
            return project.title === projectName;
        }
    );
    const classes = useStyles();
    return (
        <div style={{ marginTop: '30px' }}>
            <Card className={classes.root}>
                <CardActionArea>
                    <a
                        style={{
                            textDecoration: 'none',
                        }}
                        href={demo}>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title='Contemplative Reptile'
                            id={_id}
                        />
                    </a>
                    <CardContent
                        style={{ padding: '0' }}
                        id='card-info'></CardContent>
                </CardActionArea>
            </Card>
            <div className='project-page-info'>
                <section className='title-description-containor'>
                    <h1>
                        {title} - {year}
                    </h1>
                    <h3>{description}</h3>
                </section>
                <section className='demo-github-container'>
                    <h2>
                        <a style={{ textDecoration: 'none' }} href={demo}>
                            {' '}
                            <Button variant='contained' color='primary'>
                                Demo
                            </Button>
                        </a>{' '}
                    </h2>
                    <h2>
                        <a style={{ textDecoration: 'none' }} href={github}>
                            {' '}
                            <Button
                                variant='contained'
                                color='primary'
                                className={classes.button}>
                                Github
                            </Button>
                        </a>
                    </h2>
                </section>
            </div>
        </div>
    );
}
