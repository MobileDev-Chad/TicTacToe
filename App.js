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
    this.winGame();
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

  winGame = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win")
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win")
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Circle" : "Cross").concat(" win")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win")
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winMessage: (itemArray[1] ? "Circle" : "Cross").concat(" win")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Circle" : "Cross").concat(" win")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Circle" : "Cross").concat(" win")
      });
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
