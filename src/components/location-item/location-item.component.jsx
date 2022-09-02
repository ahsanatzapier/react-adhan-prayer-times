import Prayers from "../prayers/prayers.component";
import "./location-item.styles.css";

const LocationItem = ({ location, clickHandler }) => {
  const { place_name: place } = location;

  return (
    <div>
      <button
        className="button is-dark mb-2"
        onClick={(event) => clickHandler(event, { location })}
      >
        {place}
      </button>
    </div>
  );
};

export default LocationItem;
