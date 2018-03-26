import React , { Component } from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';
class Search extends Component{
  constructor(props){
    super(props);
    this.searchMovie = this.searchMovie.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {movieName:"",
                  movieDetails: []}
  }
  updateInputValue(evt) {
    this.setState({
      movieName: evt.target.value
    })
  }
  searchMovie(e){
    console.log("movie name is :: " + this.state.movieName);
    e.preventDefault();
    alert("here")
    console.log("inside componentWillMount");
    var getLink = this.state.movieName + "&apikey=b6323bbc";
    axios.get("http://www.omdbapi.com/?t="+getLink)
    .then(
    //   function (response){
    //   console.log(response.data);
    //   this.setState({movieDetails: response.data})
    // }

    response =>
    this.setState({ movieDetails: response.data })
  )
    // axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b6323bbc")
    // .then(response => {
    //   if(response.status == 300){
    //   console.log("200")
    // }else{
    //   console.log("not 300")
    // }})

  }
  render(){
    return (
    <form onSubmit={this.searchMovie}>
  <label>
    <input type="text" name="name" placeholder="Search the name of movie"
      value={this.state.movieName} onChange={this.updateInputValue} />
  </label>
  <input type="submit" value="Search Movie"/>
  <MovieDetails name={this.state.movieDetails}/>
</form>
)
  }
}
export default Search;
