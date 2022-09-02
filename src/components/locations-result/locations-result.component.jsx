import LocationItem from "../location-item/location-item.component";

const LocationsResult = ({ locations }) => {
  console.log(locations);
  return (
    <div className="has-text-centered">
      {/* <span className="is-size-3">Results:</span> */}
      {locations &&
        locations.map((location) => {
          return (
            <div key={location.id}>
              <LocationItem location={location} />
            </div>
          );
        })}
    </div>
  );
};

export default LocationsResult;
