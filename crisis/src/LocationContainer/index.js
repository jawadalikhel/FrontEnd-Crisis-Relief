
import React, { Component } from 'react';
import Countries from './locationList';

class Location extends Component {
  constructor(){
    super();
    this.state = {
      dataSource: [],
    }
  }

  getCountries = async () =>{
    try {
      // const countriesApi = await fetch('https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest');

      const countriesApi = await fetch('https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&query');
      const countriesJson = await countriesApi.json();
      console.log(this.state.dataSource, 'THE NEW STATE');
      return countriesJson;
    } catch (err) {
      return err
    }
  }

  componentDidMount(){
    this.getCountries().then((country) =>{

      this.setState({dataSource: country.data});
      console.log(country.data, "this is the data in componentDidMount");

    }).catch((err) =>{
      console.log(err, ' error in componentDidMount');
    })
  }

  render() {
    return (
      <div className="app">
        <Countries AddearthCountries={this.state.dataSource}/>
      </div>
    );
  }
}


export default Location;
