import React, { useState } from "react";
import { AppLoading } from "expo";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    Nerko: require("../assets/fonts/NerkoOne-Regular.ttf"),
    Fjalla: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });
};

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.screen, ...{ backgroundColor: props.color } }}>
          <Text style={styles.text} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
  },
  text: {
    fontFamily: "Fjalla",
    fontSize: 25,
    textAlign: "right",
    borderRadius: 10,
    overflow: "hidden",
  },
});
export default CategoryGridTile;
