// // import './ProjectsCard.css';
// // import React, { useEffect } from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Card from '@material-ui/core/Card';
// // import CardActionArea from '@material-ui/core/CardActionArea';
// // import CardActions from '@material-ui/core/CardActions';
// // import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import Button from '@material-ui/core/Button';
// // import Typography from '@material-ui/core/Typography';

// // const useStyles = makeStyles({
// //     root: {
// //         maxWidth: 1000,
// //     },
// //     media: {
// //         height: 140,
// //         maxWidth: 1000,
// //     },
// // });

// // export default function ProjectsCard(props) {
// //     console.log(`props`, props);
// //     const { title, img, type, technologies, bgColor, _id } = props.data;
// //     const classes = useStyles();
// //     // console.log('year :', year);
// //     console.log(`object`, object)

// //     return (
// //         <div className='projects-cards-container'>
// //             <Card className={classes.root}>
// //                 <CardActionArea>
// //                     <CardMedia
// //                         className={classes.media}
// //                         image='/image.jpeg'
// //                         title='Contemplative Reptile'
// //                     />
// //                     <CardContent>
// //                         <Typography gutterBottom variant='h5' component='h2'>
// //                             {title}
// //                         </Typography>
// //                         <Typography
// //                             variant='body2'
// //                             color='textSecondary'
// //                             component='p'></Typography>
// //                     </CardContent>
// //                 </CardActionArea>
// //                 <CardActions>
// //                     <h2 size='small' color='primary'>
// //                         {/* {year} */}
// //                     </h2>
// //                     <h2 size='small' color='primary'>
// //                         {type}
// //                     </h2>
// //                     {/* {technologies.map((tech) => {
// //                         return <div key={_id}>{tech}</div>;
// //                     })} */}
// //                     {/* {info.technologies.map((tec) => {
// //                         const alt = tec
// //                             .split('/')
// //                             [tec.split('/').length - 1].split('.')[0];
// //                         return (
// //                             <img
// //                                 // className='project-card-icons'
// //                                 key={tec}
// //                                 src={tec}
// //                                 alt={alt}
// //                             />
// //                         );
// //                     })} */}
// //                 </CardActions>
// //             </Card>
// //         </div>
// //     );
// // }

// // import './ProjectsList.css';
// // import ProjectCard from './ProjectsCard';
// import data from './projects.json';

// // export default function ProjectList() {
// //     console.log(`data`, data);
// //     return (
// //         <div>
// //             {data.map((info) => {
// //                 return <ProjectCard data={info} key={info._id} />;
// //             })}
// //         </div>
// //     );
// // }

// import './ProjectsList.css';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// // import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 600,
//     },
//     media: {
//         height: 140,
//         maxWidth: 600,
//     },
// });

// export default function ProjectsList() {
//     // console.log(`props`, props);
//     const { year, title, img, type, technologies, bgColor, _id } = data;
//     const classes = useStyles();
//     // console.log('year :', year);

//     return (
//         <div className='projects-cards-container'>
//             <Card className={classes.root}>
//                 <CardActionArea>
//                     <CardMedia
//                         className={classes.media}
//                         image='/image.jpeg'
//                         title='Contemplative Reptile'
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant='h5' component='h2'>
//                             {title}
//                         </Typography>
//                         <Typography
//                             variant='body2'
//                             color='textSecondary'
//                             component='p'></Typography>
//                     </CardContent>
//                 </CardActionArea>
//                 {/* <CardActions> */}
//                 <h2 size='small' color='primary'>
//                     {year}
//                 </h2>
//                 <h2 size='small' color='primary'>
//                     {type}
//                 </h2>
//                 {/* {technologies.map((tech) => {
//                         return <div key={_id}>{tech}</div>;
//                     })} */}
//                 {/* {info.technologies.map((tec) => {
//                         const alt = tec
//                             .split('/')
//                             [tec.split('/').length - 1].split('.')[0];
//                         return (
//                             <img
//                                 // className='project-card-icons'
//                                 key={tec}
//                                 src={tec}
//                                 alt={alt}
//                             />
//                         );
//                     })} */}
//                 {/* </CardActions> */}
//             </Card>
//         </div>
//     );
// }
