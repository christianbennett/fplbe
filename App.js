// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import News from "./NewsFolder/News";
import EkonomiNews from "./NewsFolder/EkonomiNews";
import GayaHidupNews from "./NewsFolder/GayaHidupNews";
import HiburanNews from "./NewsFolder/HiburanNews";
import InternasionalNews from "./NewsFolder/InternasionalNews";
import NasionalNews from "./NewsFolder/NasionalNews";
import TeknologiNews from "./NewsFolder/TeknologiNews";
import OlahragaNews from "./NewsFolder/OlahragaNews";
import { FlatList } from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Button
        title="Semua kategori"
        onPress={() => navigation.navigate("Berita")}
      />
      <Button
        title="Nasional"
        onPress={() => navigation.navigate("Nasional")}
      />
      <Button
        title="Internasional"
        onPress={() => navigation.navigate("Internasional")}
      />
      <Button title="Ekonomi" onPress={() => navigation.navigate("Ekonomi")} />
      <Button
        title="Olahraga"
        onPress={() => navigation.navigate("Olahraga")}
      />
      <Button
        title="Teknologi"
        onPress={() => navigation.navigate("Teknologi")}
      />
      <Button title="Hiburan" onPress={() => navigation.navigate("Hiburan")} />
      <Button
        title="Gaya Hidup"
        onPress={() => navigation.navigate("GayaHidup")}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Berita" component={News} />
        <Stack.Screen name="Nasional" component={NasionalNews} />
        <Stack.Screen name="Internasional" component={InternasionalNews} />
        <Stack.Screen name="Ekonomi" component={EkonomiNews} />
        <Stack.Screen name="Olahraga" component={OlahragaNews} />
        <Stack.Screen name="Teknologi" component={TeknologiNews} />
        <Stack.Screen name="Hiburan" component={HiburanNews} />
        <Stack.Screen name="GayaHidup" component={GayaHidupNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
