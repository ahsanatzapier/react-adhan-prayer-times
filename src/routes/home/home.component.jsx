import { useState, useEffect } from "react";
import "./home.styles.css";
import LocationsResult from "../../components/locations-result/locations-result.component";

import prayerImage from "../../assets/prayer.svg";

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

  return (
    <section className="section hero is-black is-fullheight">
      <div className="hero-body ">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-narrow  is-one-third has-background-black">
              <div className="title is-1 has-text-centered">Prayer Times</div>
              <img src={prayerImage} className="mb-4" />
              <form onSubmit={handleSubmit}>
                <div className="field has-addons ">
                  <p class="control">
                    <a class="button is-static">Location</a>
                  </p>

                  <div className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="ex. Vancouver"
                      onChange={handleChange}
                      name="search"
                      value={search}
                      required
                    />
                  </div>

                  <div className="control">
                    <button type="submit" className="button is-link">
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <br></br>

              <LocationsResult locations={locations} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
