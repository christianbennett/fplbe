import react from "react";
import React from "react";
import { View, Text, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

class homepage extends react.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text>Page one kek!</Text>
        <Button title={"page 2"} onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default homepage;
