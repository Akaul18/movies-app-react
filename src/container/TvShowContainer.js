import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

class TvShowContainer extends Component{
    render() {
        return (
            <div>
                <Card style={{maxWidth: 1000,height: 400,margin: '2rem auto'}}>
                    <Grid container spacing={1} style={{minHeight:'100%'}}>
                        <Grid item sm={3}>
                            <CardMedia
                            style={{width:'300px',height: '102%'}}
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
    }
}

export default TvShowContainer
