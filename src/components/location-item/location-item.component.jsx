import Prayers from "../prayers/prayers.component";
import "./location-item.styles.css";

const LocationItem = ({ location }) => {
  const { place_name: place } = location;

  const handleClick = (event, param) => {
    const { center } = location;
    const [latitude, longitude] = center;
    console.log(latitude, longitude);
    // <Prayers />;
  };

  return (
    <button
      className="button is-dark mb-2"
      onClick={(event) => handleClick(event, { location })}
    >
      {place}
    </button>
  );
};

export default LocationItem;
