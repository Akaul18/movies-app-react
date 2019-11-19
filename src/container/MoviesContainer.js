import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@material-ui/core';
import SelectSearchMovies from '../components/SelectSearchMovies';
import { getMovies } from '../services/api';

class MoviesContainer extends Component{

    state={
        movies:[]
    }

    getAllMovies = (type) =>{
        getMovies(type)
        .then((res) => {
            console.log(res.results);
                this.setState({movies:res.results})            
        }).catch(err => console.log(err));
    }

    render() {
        // console.log(this.state.movies[0].title);
        return (
            <div>
                <SelectSearchMovies selectOptions = {this.props.moviesDropdown} getAllMovies={this.getAllMovies} />

                {this.state.movies.map(items => {
                    const {title, release_date, popularity, overview, poster_path} = items
                    return(
                        <Card style={{maxWidth: 1000,height: 400,margin: '2rem auto'}}>
                            <Grid container spacing={1} style={{minHeight:'100%'}}>
                                <Grid item sm={3}>
                                    <CardMedia
                                    style={{width:'270px',height: '102%'}}
                                    // image={require('../assets/myimage.jpg')}
                                    image={`http://image.tmdb.org/t/p/w185/${poster_path}`}
                                    title="Movie1"
                                    />
                                </Grid>
                                <Grid item sm={9}>
                                    <Box p={2} display="flex" justifyContent="center" alignItems="center" style={{minHeight:'100%', textAlign:'center'}}>
                                    <CardContent >
                                    <Typography variant="body1" display="block" component="h1">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom>
                                        Release Date: {release_date} | popularity: {popularity}
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom>
                                        {overview}
                                    </Typography>
                                    </CardContent>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                    )
                })}
            </div>
        )
    }

}

export default MoviesContainer
