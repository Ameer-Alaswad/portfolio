import React from 'react';
import data from '../portfolio/projects.json';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import HomeButton from './homeButton';
const useStyles = makeStyles({
    root: {
        maxWidth: 1400,
        // marginLeft: 200,
        margin: '0 auto',
    },
    media: {
        height: 720,
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
        <div>
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
                            id='card-image'
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
                        Demo: <a href={demo}>{demo}</a>{' '}
                    </h2>
                    <h2>
                        Github: <a href={github}>{github}</a>
                    </h2>
                </section>
            </div>
            <HomeButton />
        </div>
    );
}
