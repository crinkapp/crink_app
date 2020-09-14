import React, { useState } from "react";
import { SearchBar } from "react-native-elements";

const searchbar = (props) => {
  const [query, setQuery] = useState("");
  return (
    <SearchBar
      placeholder="Titre, auteur ou tag…"
      onChangeText={(text) => setQuery(text)}
      inputStyle={{ fontSize: 14 }}
      value={query}
      platform="ios"
      cancelButtonTitle="Annuler"
      cancelButtonProps={{
        buttonTextStyle: { fontSize: 14 },
        color: "#B96C55",
      }}
      onSubmitEditing={props.onSubmit}
      returnKeyType="go"
      autoCorrect="false"
      autoCompleteType="false"
    />
  );
};

export default searchbar;
