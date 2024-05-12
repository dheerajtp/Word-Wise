import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "../styles";

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={"#000000"} />
    </View>
  );
};

export default Loading;
