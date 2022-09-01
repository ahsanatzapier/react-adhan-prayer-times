import { useState, useEffect } from "react";

const Home = () => {
  const [locations, setLocations] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/alberta.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiYWhzaGFzc2FuIiwiYSI6ImNsNzVkYzgxbTA0d3Qzd3FsZjNya2FtcTAifQ.zIUUl1v3mIsEhVEBQv4t_A"
    )
      .then((response) => response.json())
      .then((locations) => {
        setLocations(locations.features);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch locations");
        setIsLoading(false);
      });
  }, []);

  console.log(locations);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* {isLoading && <div>loading!</div>}

      {!isLoading && (
        <>
          {locations.map((location) => (
            <div>{location.place_name}</div>
          ))}
        </>
      )} */}
    </div>
  );
};

export default Home;
