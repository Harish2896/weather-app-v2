import { createContext, useState } from "react";

export const SetCityContext = createContext({
  city: "",
  setCity: () => null,
  latitude: "",
  setLatitude: () => null,
  longitude: "",
  setLongitude: () => {},
});

const SetCityContextsProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const value = {
    city,
    setCity,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
  };
  return (
    <SetCityContext.Provider value={value}>{children}</SetCityContext.Provider>
  );
};

export default SetCityContextsProvider;
