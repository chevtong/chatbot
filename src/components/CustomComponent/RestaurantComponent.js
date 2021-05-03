import React,{useEffect} from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api"

const libraries = ["places"];
const mapContainerStyle = {
    width: '100%',
    height: '100%',
}
const center = {
    lat: 50.850346,
    lng: 4.351721,
}

function RestaurantComponent() {

    console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY)

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries,
    })

    if (loadError) return "Error loading maps"

    if (!isLoaded) return "loading maps"
    // const getLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(position => {
    //             console.log(position)
    //           });
            
    //         } else {
    //         alert("Sorry Not available!");
    //         }
    // }
    // useEffect(() => {
    //     getLocation()
    // }, [])

    return (
        <div className="restaurant-container">
            restaurant div
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

            </GoogleMap>
        </div>
    )
}

export default RestaurantComponent;
