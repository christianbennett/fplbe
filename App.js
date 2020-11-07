import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import homepage from "./Homepage";
import news from "./News";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Detailscreen({ navigation }) {
  return (
    <View>
      <Text>Details</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("details")}
      />
      <Text>PopToTop</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.popToTop()}
      />
      <Text>Details</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("home")}
      />
    </View>
  );
}

function homescreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "0096c7",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        HELLO!
      </Text>
    </SafeAreaView>
  );
}

function Homescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button title="Details" onPress={() => navigation.navigate("details")} />
      <Text>Page Dos but in another file OwO</Text>
      <Button
        title="homepage"
        onPress={() => navigation.navigate("homepage")}
      />
      <Text>News</Text>
      <Button title="News" onPress={() => navigation.navigate("news")} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Home2" component={homescreen} />
        <Stack.Screen name="details" component={Detailscreen} />
        <Stack.Screen name="homepage" component={homepage} />
        <Stack.Screen name="news" component={news} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
