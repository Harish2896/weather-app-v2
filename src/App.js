import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import SearchBox from "./components/search-box/search-box.component";
import GeoCodeAPI from "./API/geocode-API/geocode.api";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBox />
      <GeoCodeAPI />
    </div>
  );
}

export default App;
