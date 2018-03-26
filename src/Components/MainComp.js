import React , {Component} from 'react';
//import axios from 'axios';
import Search from './Search';
class MainComp extends Component{
  // componentWillMount(){
  //   console.log("inside componentWillMount");
  //   axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b6323bbc")
  //   .then(function (response){
  //     console.log(response.data);
  //   })
  //   axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b6323bbc")
  //   .then(response => {
  //     if(response.status == 300){
  //     console.log("200")
  //   }else{
  //     console.log("not 300")
  //   }})
  // }
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>MOVIE FINDER</h1>
            <Search/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComp;
