import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { NativeBaseProvider, Button } from "native-base";

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
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win"),
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win"),
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Circle" : "Cross").concat(" win"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win"),
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winMessage: (itemArray[1] ? "Circle" : "Cross").concat(" win"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Circle" : "Cross").concat(" win"),
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Circle" : "Cross").concat(" win"),
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Circle" : "Cross").concat(" win"),
      });
    }
  };

  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Text style={styles.gametitle}>---- Tic Tac Toe----</Text>
          <View style={styles.grid}>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(0)}>
                  <Entypo
                    name={this.chooseItemIcon(0)}
                    size={50}
                    color={this.chooseItemColor(0)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(1)}>
                  <Entypo
                    name={this.chooseItemIcon(1)}
                    size={50}
                    color={this.chooseItemColor(1)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(2)}>
                  <Entypo
                    name={this.chooseItemIcon(2)}
                    size={50}
                    color={this.chooseItemColor(2)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(3)}>
                  <Entypo
                    name={this.chooseItemIcon(3)}
                    size={50}
                    color={this.chooseItemColor(3)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(4)}>
                  <Entypo
                    name={this.chooseItemIcon(4)}
                    size={50}
                    color={this.chooseItemColor(4)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(5)}>
                  <Entypo
                    name={this.chooseItemIcon(5)}
                    size={50}
                    color={this.chooseItemColor(5)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(6)}>
                  <Entypo
                    name={this.chooseItemIcon(6)}
                    size={50}
                    color={this.chooseItemColor(6)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(7)}>
                  <Entypo
                    name={this.chooseItemIcon(7)}
                    size={50}
                    color={this.chooseItemColor(7)}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.item}>
                <TouchableOpacity onPress={() => this.drawItem(8)}>
                  <Entypo
                    name={this.chooseItemIcon(8)}
                    size={50}
                    color={this.chooseItemColor(8)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <StatusBar style="auto" />
          <Text style={styles.winMessage}>{this.state.winMessage}</Text>
          <Button style={styles.button} onPress={this.resetGame}>
            <Text style={styles.btntext}>Reset Game</Text>
          </Button>
        </View>
      </NativeBaseProvider>
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
  gametitle: {
    fontSize: 25,
    marginBottom: 20,
  },
  grid: {},
  row: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
    padding: 10,
  },
  btntext: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default App;
