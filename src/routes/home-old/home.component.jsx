import { useState, useEffect } from "react";
import "./home.styles.css";
import LocationsResult from "../../components/locations-result/locations-result.component";

const defaultFromFields = {
  search: "",
};

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [formFields, setFormFields] = useState(defaultFromFields);
  const [searchString, setSearchString] = useState("");
  const { search } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchString(search);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    const endPoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    const parameters = "limit=5&proximity=ip&types=place";
    const accessToken =
      "pk.eyJ1IjoiYWhzaGFzc2FuIiwiYSI6ImNsNzVkYzgxbTA0d3Qzd3FsZjNya2FtcTAifQ.zIUUl1v3mIsEhVEBQv4t_A";

    fetch(
      `${endPoint}${searchString}.json?${parameters}&access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((locations) => {
        setLocations(locations.features);
      })
      .catch(() => {
        console.log("Unable to fetch locations");
      });
  }, [searchString]);

  // console.log(locations);

  return (
    <div className="">
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Search Location</label>
            <input
              className="input"
              type="text"
              placeholder="ex. Vancouver"
              onChange={handleChange}
              name="search"
              value={search}
              required
            />
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </section>

      <LocationsResult locations={locations} />
    </div>
  );
};

export default Home;
