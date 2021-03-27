// import './ProjectsList.css';
// import ProjectCard from './ProjectsCard';
import data from './projects.json';

// export default function ProjectList() {
//     console.log(`data`, data);
//     return (
//         <div>
//             {data.map((info) => {
//                 return <ProjectCard data={info} key={info._id} />;
//             })}
//         </div>
//     );
// }

import './ProjectsList.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 140,
        maxWidth: 600,
    },
});

export default function ProjectsList() {
    // console.log(`props`, props);
    // const { year, title, img, type, technologies, bgColor, _id } = data;
    const classes = useStyles();
    // console.log('year :', year);

    return (
        <div>
            {data.map((item) => {
                return (
                    <div key={item._id} className='projects-cards-container'>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image='/static/images/cards/contemplative-reptile.jpg'
                                    title='Contemplative Reptile'
                                />
                                <CardContent>
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
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}
