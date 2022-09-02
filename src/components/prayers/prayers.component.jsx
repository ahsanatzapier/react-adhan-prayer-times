import fajr from "../../assets/fajr.svg";
import sunrise from "../../assets/sunrise.svg";
import dhuhr from "../../assets/dhuhr.svg";
import asr from "../../assets/asr.svg";
import maghrib from "../../assets/maghrib.svg";
import isha from "../../assets/isha.svg";

import moment from "moment-timezone";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { ComponentsContext } from "../../contexts/components.context";

import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  SunnahTimes,
  Prayer,
  Qibla,
} from "adhan";

const Prayers = ({ latitude, longitude, place }) => {
  const {
    setShowTitleComponent,
    setShowImageComponent,
    setShowSmallImageComponent,
    setShowSearchComponent,
    setShowLocationItemsComponent,
  } = useContext(ComponentsContext);

  setShowImageComponent(false);
  setShowSearchComponent(false);
  setShowTitleComponent(false);
  setShowSmallImageComponent(true);
  setShowLocationItemsComponent(false);

  const coordinates = new Coordinates(latitude, longitude);
  // console.log(place);
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  // });

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    //  <div className=" has-background-dark">
    //       <strong className="mt-2 subtitle is-6 has-text-white is-vcentered">
    //         Next Prayer: {toTitleCase(next)} in{" "}
    //         {timeLeft.hours !== 0 && timeLeft.hours}
    //         {timeLeft.hours !== 0 && "Hours "}
    //         {timeLeft.minutes !== 0 && timeLeft.minutes}
    //         {timeLeft.minutes !== 0 && " Minutes "}
    //         {timeLeft.seconds} Seconds
    //       </strong>
    //     </div>
    <div>
      <span className="title is-2 has-text-danger">{place}</span>
      <br></br>
      <br></br>

      <table className="table is-fullwidth has-background-black">
        <tbody>
          <tr>
            <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold has-text-left">
              Fajr
            </td>
            <td className="has-text-centered is-borderless">
              <img src={fajr} alt="" className="svgFajr" />
            </td>
            <td className="has-text-right has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
              {moment(prayerTimes.fajr).tz("America/Edmonton").format("h:mm A")}
            </td>
          </tr>

          <tr>
            <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold has-text-left">
              Sunrise
            </td>
            <td className="has-text-centered is-borderless">
              <img src={sunrise} alt="" className="svgSunrise" />
            </td>
            <td className="has-text-right has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
              {moment(prayerTimes.sunrise)
                .tz("America/Edmonton")
                .format("h:mm A")}
            </td>
          </tr>

          <tr>
            <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold has-text-left">
              Dhuhr
            </td>
            <td className="has-text-centered is-borderless">
              <img src={dhuhr} alt="" className="svgDhuhr" />
            </td>
            <td className="has-text-right has-text-white is-vcentered is-borderless is-size-5 has-text-weight-medium">
              {moment(prayerTimes.dhuhr)
                .tz("America/Edmonton")
                .format("h:mm A")}
            </td>
          </tr>

          <tr>
            <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold has-text-left">
              Asr
            </td>
            <td className="has-text-centered is-borderless">
              <img src={asr} alt="" className="svgAsr" />
            </td>
            <td className="has-text-right has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
              {moment(prayerTimes.asr).tz("America/Edmonton").format("h:mm A")}
            </td>
          </tr>

          <tr>
            <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold has-text-left">
              Maghrib
            </td>
            <td className="has-text-centered is-borderless">
              <img src={maghrib} alt="" className="svgMaghrib" />
            </td>
            <td className="has-text-right has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
              {moment(prayerTimes.maghrib)
                .tz("America/Edmonton")
                .format("h:mm A")}
            </td>
          </tr>

          <tr>
            <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold has-text-left">
              Isha
            </td>
            <td className="has-text-centered is-borderless">
              <img src={isha} alt="" className="svgIsha" />
            </td>
            <td className="has-text-right has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
              {moment(prayerTimes.isha).tz("America/Edmonton").format("h:mm A")}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="button is-danger mb-2"
        onClick={() => {
          window.location.reload();
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default Prayers;
