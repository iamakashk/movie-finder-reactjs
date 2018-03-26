import React , {Component} from 'react';
class MovieDetails extends Component{
  constructor(props){
    super(props);
    console.log("inside movieDetails::    "+this.props.name);
  }
  componentWillMount(){
    console.log("inside componentWillMount ... movieDetails::" + this.props.name)
  }

  render(){
    return (<div>
      <div className="movieImage" > <img className="img-fluid" src={this.props.name.Poster}/></div>
      <div className="movieRelease"><span>Release Date:</span>{this.props.name.Released}</div>
      <div className="movieTitle"><span>Plot:</span>{this.props.name.Plot}</div>

    {this.props.name.Year}
    </div>);
  }
}
export default MovieDetails;
