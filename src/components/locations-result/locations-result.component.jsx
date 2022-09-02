import LocationItem from "../location-item/location-item.component";
import Prayers from "../prayers/prayers.component";
import { useState } from "react";

const LocationsResult = ({ locations }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const handleClick = (event, param) => {
    // console.log(param);
    const { location } = param;
    const { center } = location;
    const [longitude, latitude] = center;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  // console.log(locations);
  return (
    <div className="has-text-centered">
      {locations &&
        locations.map((location) => {
          return (
            <div key={location.id}>
              <LocationItem location={location} clickHandler={handleClick} />
            </div>
          );
        })}
      <br></br>
      {latitude && longitude && (
        <Prayers latitude={latitude} longitude={longitude} />
      )}
    </div>
  );
};

export default LocationsResult;
