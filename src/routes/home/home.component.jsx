import { useState, useEffect } from "react";
import "./home.styles.css";
import LocationsResult from "../../components/locations-result/locations-result.component";

import fajr from "../../assets/fajr.svg";
import sunrise from "../../assets/sunrise.svg";
import dhuhr from "../../assets/dhuhr.svg";
import asr from "../../assets/asr.svg";
import maghrib from "../../assets/maghrib.svg";
import isha from "../../assets/isha.svg";

import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
  Qibla,
} from "adhan";
import moment from "moment-timezone";

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

  const coordinates = new Coordinates(53.712776, -113.213333);
  const date = new Date();
  const params = CalculationMethod.MoonsightingCommittee();

  const prayerTimes = new PrayerTimes(coordinates, date, params);

  const sunnahTimes = new SunnahTimes(prayerTimes);

  var current = prayerTimes.currentPrayer();
  var next = prayerTimes.nextPrayer();
  var nextPrayerTime = prayerTimes.timeForPrayer(next);

  function prayerName(prayer) {
    if (prayer === Prayer.Fajr) {
      return "Fajr";
    } else if (prayer === Prayer.Sunrise) {
      return "Sunrise";
    } else if (prayer === Prayer.Dhuhr) {
      return "Dhuhr";
    } else if (prayer === Prayer.Asr) {
      return "Asr";
    } else if (prayer === Prayer.Maghrib) {
      return "Maghrib";
    } else if (prayer === Prayer.Isha) {
      return "Isha";
    } else if (prayer === Prayer.None) {
      return "None";
    }
  }

  var current = prayerTimes.currentPrayer();
  var next = prayerTimes.nextPrayer();
  var nextPrayerTime = prayerTimes.timeForPrayer(next);

  const calculateTimeLeft = () => {
    const difference = +new Date(prayerTimes.timeForPrayer(next)) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <section className="section hero is-black is-fullheight">
      <div className="hero-body ">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-narrow  is-one-third has-background-black">
              <form onSubmit={handleSubmit}>
                <div className="field has-addons ">
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
                      Submit
                    </button>
                  </div>
                </div>
              </form>

              <br></br>

              <LocationsResult locations={locations} />
              <br></br>
            </div>

            {/* <div className="">
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <td className="has-text-white is-vcentered">Middle of the Night</td>
                <td className="has-text-centered">Image</td>
                <td className="has-text-right has-text-white is-vcentered">
                  {moment(sunnahTimes.middleOfTheNight)
                    .tz("America/Edmonton")
                    .format("h:mm A")}
                </td>
              </tr>

              <tr>
                <td className="has-text-white is-vcentered">Last Third of the Night</td>
                <td className="has-text-centered">Image</td>
                <td className="has-text-right has-text-white is-vcentered">
                  {moment(sunnahTimes.lastThirdOfTheNight)
                    .tz("America/Edmonton")
                    .format("h:mm A")}
                </td>
              </tr>
              <tr>
                <td className="has-text-white is-vcentered">Qibla Direction</td>
                <td className="has-text-centered">Image</td>
                <td className="has-text-right has-text-white is-vcentered">
                  {parseFloat(Qibla(coordinates).toFixed(3))}
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
