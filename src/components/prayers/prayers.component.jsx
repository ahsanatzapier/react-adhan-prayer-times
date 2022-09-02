const Prayers = () => {
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
    <table className="table is-fullwidth has-background-black">
      <tbody>
        <tr>
          <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
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
          <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
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
          <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
            Dhuhr
          </td>
          <td className="has-text-centered is-borderless">
            <img src={dhuhr} alt="" className="svgDhuhr" />
          </td>
          <td className="has-text-right has-text-white is-vcentered is-borderless is-size-5 has-text-weight-medium">
            {moment(prayerTimes.dhuhr).tz("America/Edmonton").format("h:mm A")}
          </td>
        </tr>

        <tr>
          <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
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
          <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
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
          <td className="has-text-white is-vcentered is-borderless is-size-5 has-text-weight-semibold">
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
  );
};
