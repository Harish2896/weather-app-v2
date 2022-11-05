import { SetCityContext } from "../../context/setcity-context/setcity.context";
import { useEffect, useContext } from "react";

const GeoCodeAPI = () => {
  const { setLatitude, setLongitude, city } = useContext(SetCityContext);

  useEffect(() => {
    const getGeoCode = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=3e7674abd3e74c5a4844b4875033acb6`
      );
      const [data] = await response.json();
      setLatitude(data.lat);
      setLongitude(data.lon);
    };
    getGeoCode();
  }, [city]);
};

export default GeoCodeAPI;
