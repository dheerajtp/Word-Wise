import React from "react";
import { FlatList } from "react-native";
import SingleWordDetail from "./SingleWordDetail";

const WordDetails = ({ data }) => {
  console.log(JSON.stringify(data), "response from API");
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <SingleWordDetail item={item} />}
    />
  );
};

export default WordDetails;
