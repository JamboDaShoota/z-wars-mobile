import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { MenuButton } from "./components/MenuButton/MenuButton";

export default function App() {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../assets/images/z-wars-background-1.jpeg")}
        style={styles.background1}
        blurRadius={2}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/z-wars-logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.menuContainer}>
          <MenuButton title="BATTLE" clickHandler={() => {}} />
          <MenuButton title="RULES" clickHandler={() => {}} />
          <MenuButton title="SETTINGS" clickHandler={() => {}} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  background1: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imageContainer: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "60%",
    backgroundColor: "red",
  }
});
