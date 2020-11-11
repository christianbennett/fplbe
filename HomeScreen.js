import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Semua Berita")}
        >
          Semua Berita
        </Text>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Nasional")}
        >
          Nasional
        </Text>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Internasional")}
        >
          Internasional
        </Text>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Ekonomi")}
        >
          Ekonomi
        </Text>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Olahraga")}
        >
          Olahraga
        </Text>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Teknologi")}
        >
          Teknologi
        </Text>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Hiburan")}
        >
          Hiburan
        </Text>
        <Text
          style={styles.kategoriText}
          onPress={() => navigation.navigate("Gaya Hidup")}
        >
          Gaya Hidup
        </Text>
      </View>

      {/* <Button
        title="Semua Berita"
        onPress={() => navigation.navigate("Semua Berita")}
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
        onPress={() => navigation.navigate("Gaya Hidup")}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#f2f2f2",
  },
  scrollView: {
    flex: 1,
    marginVertical: 3,
  },
  kategoriText: {
    // flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});
