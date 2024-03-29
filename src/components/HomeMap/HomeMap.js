'use client'
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const HomeMap = ({ apiKey }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        lat: 23.797558598321668, // Default latitude
        lng: 90.38292317531582  // Default longitude
    });

    const mapStyles = {
        height: "70vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 23.797558598321668, // Default latitude
        lng: 90.38292317531582  // Default longitude
    };

    const mapOptions = {
        styles: [
            {
                "stylers": [
                    {
                        "lightness": 40
                    }
                ]
            }
        ]
    };

    const handleMapClick = (event) => {
        const clickedLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setSelectedLocation(clickedLocation);
        console.log("Selected Location:", clickedLocation);
    };

    return (
        <div >
            <div className='container mx-auto  w-full space-y-3 justify-start items-center text-4xl font-bold'>
                <h1>Visit me</h1>
            </div>
            <div className='container mx-auto  w-full space-y-3 justify-center items-center text-center mb-10 '>
                <LoadScript googleMapsApiKey={apiKey}>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                        onClick={handleMapClick}
                        options={mapOptions}
                    >
                        <Marker
                            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                        />
                    </GoogleMap>
                </LoadScript></div>
        </div>
    );
};

export default HomeMap;
