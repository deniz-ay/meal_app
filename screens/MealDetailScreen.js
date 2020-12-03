import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const { mealId } = props.route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  useEffect(() => {
    props.navigation.setOptions({ title: selectedMeal.title });
  }, []);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
