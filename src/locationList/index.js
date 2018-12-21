import React from 'react';
import './style.css';
import Map from '../Map';
import footer from '../footer';
import { Header, Image, Segment, Container, Icon } from 'semantic-ui-react';


const CountriesList = (props) => {
  console.log(props, ' THE PROPS IN CountriesList');
  const countriesList = props.showLocation.map((val, id) =>{
    console.log(val.fields.country, 'THIS IS COUNTRY')
    for(let i = 0; i < val.fields.country.length; i++){
      return(


        <div key={val.id} className="grid-container">
              <div>
                Country: {val.fields.country[i].name}
                Date: {val.fields.date.created.slice(0,10)}
                Type: {val.fields.type[i].name}
              </div>
        </div>
      )
    }
    return countriesList;
  });

  return(
    <div className="showContainer">
      <div className="locationContainer">
        <h1 className="title">Countries In Need Of Help</h1>
        {countriesList}
      </div>
      <div className="map"><Map /></div>

    </div>
  )
}
export default CountriesList;

// Status: {val.fields.status}

// <div className="mapContainer">
//   <Map/>
// </div>
