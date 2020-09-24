import React, { useState } from "react";
import { SearchBar } from "react-native-elements";

const searchbar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <SearchBar
      placeholder="Rechercher une publication"
      onChangeText={(text) => setQuery(text)}
      inputStyle={{ fontSize: 14 }}
      value={query}
      platform="ios"
      cancelButtonTitle="Annuler"
      cancelButtonProps={{
        buttonTextStyle: { fontSize: 14 },
        color: "#B96C55",
      }}
      onSubmitEditing={() => props.onSubmit(query)}
      returnKeyType="go"
    />
  );
};

export default searchbar;
