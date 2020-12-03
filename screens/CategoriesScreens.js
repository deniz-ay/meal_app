import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import CategoryGridTile from "../components/CategoryGridTile";

const fetchFonts = () => {
  return Font.loadAsync({
    Nerko: require("../assets/fonts/NerkoOne-Regular.ttf"),
    Fjalla: require("../assets/fonts/FjallaOne-Regular.ttf"),
  });
};

const CategoriesScreen = (props) => {
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
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Nerko",
  },
});

export default CategoriesScreen;
