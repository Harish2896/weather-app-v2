import { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const selectHandler = async (value) => {};
  return (
    <PlacesAutocomplete
      value={searchQuery}
      onChange={setSearchQuery}
      onSelect={selectHandler}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input {...getInputProps({ placeholder: "Search your city" })} />

          <div>
            {loading ? <div>Please wait...</div> : null}
            {suggestions.map((suggestion) => {
              console.log(suggestion.description);
              return <div>{suggestion.description}</div>;
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default Search;
