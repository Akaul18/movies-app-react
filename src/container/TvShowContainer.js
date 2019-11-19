import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@material-ui/core';
import SelectSearchTv from '../components/SelectSearchTv';
import { getTv } from '../services/api';

class TvShowContainer extends Component{

    state = {
        tv:[]
    }

    getAllTv = (type) =>{
        getTv(type)
        .then((res) => {
            console.log(res.results);
                this.setState({tv:res.results})            
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <SelectSearchTv tvOptions ={this.props.tvDropdown} getAllTv={this.getAllTv} />

                {this.state.tv.map(items => {
                    const {id, original_name, first_air_date, popularity, overview, poster_path} = items
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
                                        {original_name}
                                    </Typography>
                                    <Typography variant="body2" display="block" gutterBottom>
                                        First air date: {first_air_date} | popularity: {popularity}
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
                    })
                }
            </div>
        )
    }
}

export default TvShowContainer
