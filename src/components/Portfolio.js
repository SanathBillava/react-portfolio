import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box, Grid, Card, CardActionArea, CardActions, CardContent,
    CardMedia, Button, Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import work1 from '../images/work1.jpg';
import work4 from '../images/work4.jpg';
import a3 from '../images/a3.jpg';
import a5 from '../images/a5.jpg';

//CSS Styles
const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project1" height="140" image={work1} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                </Typography>
                            </CardContent>
                        </CardActionArea>    
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                 {/* Project 2 */}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project2" height="140" image={work4} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project3" height="140" image={a3} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project4" height="140" image={a5} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
