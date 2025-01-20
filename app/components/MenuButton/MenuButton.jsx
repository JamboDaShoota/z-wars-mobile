import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const MenuButton = ({ title, clickHandler }) => {
  return (
    <TouchableOpacity onPress={clickHandler}>
      <View style={styles.buttonContainer}>
        <View style={styles.shadowContainer}>
          <LinearGradient
            colors={["#337DC8", "#315171", "#000000", "#4A0C08", "#840E06"]}
            locations={[0, 0.31, 0.64, 0.88, 1]}
            start={{ x: 1, y: -0.5 }}
            end={{ x: 0, y: 1 }}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>{title}</Text>
          </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
      buttonText: {
        color: "white",
        fontFamily: "Times New Roman",
        fontSize: 40,
      },
      buttonBackground: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "white",
      },
      shadowContainer: {
        width: "55%",
        height: "20%",
        backgroundColor: "transparent",
        shadowColor: "black",
        shadowOffset: {
          width: -4,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
      },
});
