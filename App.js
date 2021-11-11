import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

let itemArray = new Array(9).fill("empty");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCircle: false,
      winMessage: "",
    };
  }

  drawItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCircle;
      this.setState({ isCircle: !itemArray[itemNumber] }, () => {});
    }
  };

  chooseItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "circle" : "cross";
    }
    return "pencil";
  };

  chooseItemColor = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "green" : "red";
    }
    return "black";
  };

  resetGame = () => {
    itemArray.fill("empty");
    this.setState({ winMessage: "" });
    //force update to component
    this.forceUpdate();
  };

  winGame = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your555 app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
