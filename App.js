import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsNavigator from "./navigation/MealsNavigator";

export default function App() {
  return <MealsNavigator />;
}

const styles = StyleSheet.create({});
