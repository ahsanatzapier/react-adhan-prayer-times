import { useState, useEffect } from "react";
import "./home.styles.css";
import LocationsResult from "../../components/locations-result/locations-result.component";
import Search from "../../components/search/search.component";
import Title from "../../components/title/title.component";

import { useContext } from "react";
import { ComponentsContext } from "../../contexts/components.context";

import Image from "../../components/image/image.component";
import SmallImage from "../../components/image/smallimage.component";

const defaultFromFields = {
  search: "",
};

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [formFields, setFormFields] = useState(defaultFromFields);
  const [searchString, setSearchString] = useState("");
  const [searchUpdated, setSearchUpdated] = useState(false);
  const { search } = formFields;
  const {
    showTitleComponent,
    setShowTitleComponent,
    showImageComponent,
    setShowImageComponent,
    showSmallImageComponent,
    setShowSmallImageComponent,
    showSearchComponent,
    setShowSearchComponent,
    showLocationResultsComponent,
    setShowLocationResultsComponent,
  } = useContext(ComponentsContext);

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
        setSearchUpdated(true);
      })
      .catch(() => {
        console.log("Unable to fetch locations");
      });
  }, [searchString]);

  setShowSearchComponent(true);
  setShowTitleComponent(true);
  setShowImageComponent(true);
  setShowLocationResultsComponent(true);

  console.log("Checking for location when page loads", locations);
  console.log(searchUpdated);

  return (
    <section className="section hero is-black is-fullheight">
      <div className="hero-body ">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-narrow  is-one-third has-background-black has-text-centered">
              {showTitleComponent && <Title />}

              {showImageComponent && <Image />}
              {showSmallImageComponent && <SmallImage />}

              {showSearchComponent && (
                <Search
                  submitHandler={handleSubmit}
                  changeHandler={handleChange}
                  search={search}
                />
              )}

              <br></br>

              {showLocationResultsComponent && (
                <LocationsResult locations={locations} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
