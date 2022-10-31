import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import env from "react-dotenv";

const containerStyle = {
  width: "600px",
  height: "200px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};


function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: env.REACT_APP_GOOGLE_MAP_API,
  });


  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      onLoad={(map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
      }}
      onUnmount={(map) => {}}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
