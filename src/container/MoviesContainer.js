import React, { Component } from 'react';
import SelectSearchMovies from '../components/SelectSearchMovies';
import { getMovies } from '../services/api';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
                    const {id, title, release_date, popularity, overview, poster_path} = items
                    return(
                        <Card key={id} style={{maxWidth: 1000,height: 400,margin: '2rem auto'}}>
                            <Grid container spacing={1} style={{minHeight:'100%'}}>
                                <Grid item sm={3}>
                                    <CardMedia
                                    style={{width:'270px',height: '102%'}}
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
