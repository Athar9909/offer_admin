// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import React, { Component } from "react";

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={10}
//         style={{ width: "50%", height: "50%", position: "relative" }}
//         initialCenter={{
//           lat: 28.7,
//           lng: 77.4752,
//         }}
//       >
//         <Marker onClick={this.onMarkerClick} />

//         {/* <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow> */}
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAihwKNj-07whXNy0_nKDqkxN4QxCA-3uI",
// })(MapContainer);

import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapStyles from "./mapStyles";

export default function MapComponent() {
  const [selectedPark, setSelectedPark] = useState(null);

  //   useEffect(() => {
  //     const listener = (e) => {
  //       if (e.key === "Escape") {
  //         setSelectedPark(null);
  //       }
  //     };
  //     window.addEventListener("keydown", listener);

  //     return () => {
  //       window.removeEventListener("keydown", listener);
  //     };
  //   }, []);
  return (
    <GoogleMap
      defaultZoom={19}
      defaultCenter={{ lat: 43.6561, lng: -79.3802 }}
      options={{ styles: mapStyles }}
    >
      <Marker
        position={{
          lat: 41.8916,
          lng: -87.6079,
        }}
      />
      {/* {parkData.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            url: "https://img.icons8.com/color/48/000000/map-pin.png",
            scaledSize: new window.google.maps.Size(50, 50)
          }}
        />
      ))} */}

      {/* {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  );
}
