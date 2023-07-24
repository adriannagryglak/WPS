import React , {useContext}from 'react'
import GoogleMapReact from 'google-map-react';
import Pin from "../images/svg/pin.svg";
import { CustomCursorContext } from './customCursorContext'


const AnyReactComponent = () => <a href="https://www.google.com/maps/place/Zielonka+14,+59-940+Zielonka/@51.2727738,15.1431807,17z/data=!3m1!4b1!4m6!3m5!1s0x4708c4379edf804d:0x7faa7c1d60d6c24b!8m2!3d51.2727738!4d15.1453694!16s%2Fg%2F11rd3gm6s0?entry=ttu" className='custom-pin-container'><Pin /><span>TU JESTEŚMY</span></a>;

export default function Map() {

  const { setType } = useContext(CustomCursorContext);

    const defaultProps = {
        center: {
            address: 'Zielonka, Polska',
            lat: 51.272872797868544,
            lng: 15.144943093247383
        },
        zoom: 12,
      };

    const mapStyles = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#06090a"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#f6f6f6"
            },
            {
              "weight": 1.5
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "weight": 3.5
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#bdbdbd"
            },
            {
              "visibility": "off"
            },
            {
              "weight": 3
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#bfbfbf"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#c8a23e"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#6ea0bf"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#6ea0bf"
            },
            {
              "weight": 1.5
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
    ];

      return (
 
            <div className="map" style={{ height: '70vh', width: '100%' }} onMouseEnter={() => { setType('hovered') }} onMouseLeave={() => { setType('default') }}>
                 <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyByWdr1fVwjjWaAfcwldCl6kTYH4u-0zHY" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={{ styles: mapStyles }}
                >
                    <AnyReactComponent
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                    
                    />
                </GoogleMapReact>
            </div>
  
      );

}
