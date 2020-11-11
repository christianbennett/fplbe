import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import News from "./NewsFolder/News";
import EkonomiNews from "./NewsFolder/EkonomiNews";
import GayaHidupNews from "./NewsFolder/GayaHidupNews";
import HiburanNews from "./NewsFolder/HiburanNews";
import InternasionalNews from "./NewsFolder/InternasionalNews";
import NasionalNews from "./NewsFolder/NasionalNews";
import TeknologiNews from "./NewsFolder/TeknologiNews";
import OlahragaNews from "./NewsFolder/OlahragaNews";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Semua Berita" component={News} />
        <Stack.Screen name="Nasional" component={NasionalNews} />
        <Stack.Screen name="Internasional" component={InternasionalNews} />
        <Stack.Screen name="Ekonomi" component={EkonomiNews} />
        <Stack.Screen name="Olahraga" component={OlahragaNews} />
        <Stack.Screen name="Teknologi" component={TeknologiNews} />
        <Stack.Screen name="Hiburan" component={HiburanNews} />
        <Stack.Screen name="Gaya Hidup" component={GayaHidupNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
