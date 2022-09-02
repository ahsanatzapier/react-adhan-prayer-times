import LocationItem from "../location-item/location-item.component";
import Prayers from "../prayers/prayers.component";
import { useState } from "react";

import { useContext } from "react";
import { ComponentsContext } from "../../contexts/components.context";

const LocationsResult = ({ locations }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [place, setPlace] = useState("");

  const {
    showPrayersComponent,
    setShowPrayersComponent,
    showLocationItemsComponent,
    setShowLocationItemsComponent,
  } = useContext(ComponentsContext);

  const handleClick = (event, param) => {
    // console.log(param);
    const { location } = param;
    console.log(location);
    const { text } = location;
    // console.log(place_name);
    const { center } = location;
    const [longitude, latitude] = center;
    setLatitude(latitude);
    setLongitude(longitude);
    setPlace(text);
  };

  setShowPrayersComponent(true);
  setShowLocationItemsComponent(true);

  // console.log(locations);
  return (
    <div className="has-text-centered">
      {locations &&
        showLocationItemsComponent &&
        locations.map((location) => {
          return (
            <div key={location.id}>
              <LocationItem location={location} clickHandler={handleClick} />
            </div>
          );
        })}
      <br></br>
      {latitude && longitude && place && showPrayersComponent && (
        <Prayers latitude={latitude} longitude={longitude} place={place} />
      )}
    </div>
  );
};

export default LocationsResult;
