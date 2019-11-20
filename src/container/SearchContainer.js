import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import  Pagination  from '../components/Pagination';

class SearchContainer extends Component{
    render() {
        const { searchValue, searchResults, total_results } = this.props;
        return (
            <div>
                {searchValue == 0 && searchResults.length <=0 &&
                    <Box display="flex" justifyContent="center" alignItems="center" style={emptySearch}>
                        <Typography variant="h4" gutterBottom>Please enter a search</Typography>
                    </Box>
                }

                {searchValue.length >0 && total_results == -1 && 
                    <Box display="flex" justifyContent="center" alignItems="center" style={emptySearch}>
                        <Typography variant="h4" gutterBottom>Please initiate a search</Typography>
                    </Box>
                }

                {total_results == 0 && searchValue.length > 0 &&
                    <Box display="flex" justifyContent="center" alignItems="center" style={emptySearch}>
                        <Typography variant="h4" gutterBottom>Sorry there were no results</Typography>
                    </Box>
                }
               {searchResults.map(items=>{
                   const { id, title, release_date, popularity, poster_path, overview } = items;
                   return (
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
                    );
               })}

               {/* {this.props.total_results > 0 ? <Pagination 
                resultsPerPage={this.props.resultsPerPage}
                total_results={this.props.total_results}
                paginate={this.props.paginate}
                /> : "" } */}
            </div>
        )
    }
}

const emptySearch = {
    textAlign:'center',
    width:'100%'
}

export default SearchContainer
