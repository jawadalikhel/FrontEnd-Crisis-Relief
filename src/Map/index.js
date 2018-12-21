import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 class Mapcontainer extends Component {
    render(){
        return (
         <div>
       <Map style={{width: '30em', height: '30em', position: 'relative'}} google={this.props.google} zoom={14} initialCenter={{lat: 30.2682, lng: -97.74295}}/>
          <Marker onClick={this.onMarkerClick}
             name={'Current Location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>input</h1>
              </div>
            </InfoWindow>
       </div>
        )
    }
}

 export default GoogleApiWrapper({
     apiKey: ('AIzaSyAbrSHi6Kh4l_JpyMZjbjT0PB5WllFG8CI')
 })(Mapcontainer)
