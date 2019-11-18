import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// const card = {
//     maxWidth: '1000px',
//     height: '400px',
//     margin: '2rem auto'
// }
// const media = {
//     width:'300px',
//     height: '200px',
//     paddingTop: '56.25%' // 16:9
// }
const useStyles = makeStyles(theme => ({
        card: {
        maxWidth: 1000,
        height: 400,
        margin: '2rem auto'
        },
        media: {
        width:'300px',
        height: '102%'
        // paddingTop: '56.25%', // 16:9
    }
}));

const TvShowContainer = () => {
    const classes = useStyles();
    const theme = useTheme();
    // render() {
        return (
            <div>
                <Card className={classes.card}>
                    <Grid container spacing={1} style={{minHeight:'100%'}}>
                        <Grid item sm={3}>
                            <CardMedia
                            className={classes.media}
                            // image="./myimage.jpg"
                            image={require('../assets/myimage.jpg')}
                            title="Movie1"
                            />
                        </Grid>
                        <Grid item sm={9}>
                            <Box display="flex" justifyContent="center" alignItems="center" style={{minHeight:'100%', textAlign:'center'}}>
                            <CardContent >
                            <Typography variant="body1" display="block" component="h1">
                                MovieName
                            </Typography>
                            <Typography variant="body2" display="block" gutterBottom>
                                Release Date: undefined | popularity: 418645
                            </Typography>
                            <Typography variant="body2" display="block" gutterBottom>
                                falana dimkada
                            </Typography>
                            </CardContent>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    // }

}

export default TvShowContainer
