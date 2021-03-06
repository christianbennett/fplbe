import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      <View style={styles.upperSection}>
        <TouchableOpacity
          style={styles.leftTop}
          onPress={() => navigation.navigate("Semua Berita")}
        >
          <Text style={styles.textContentLeftTop}>Semua Berita</Text>
        </TouchableOpacity>
        <View style={styles.rightTop}>
          <TouchableOpacity
            style={styles.rightTopContent}
            onPress={() => navigation.navigate("Nasional")}
          >
            <Text style={styles.textContent}>Nasional</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightTopContent}
            onPress={() => navigation.navigate("Internasional")}
          >
            <Text style={styles.textContent}>Internasional</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rightTopContent}
            onPress={() => navigation.navigate("Ekonomi")}
          >
            <Text style={styles.textContent}>Ekonomi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerSection}>
        <TouchableOpacity
          style={styles.lowerSectionContent}
          onPress={() => navigation.navigate("Olahraga")}
        >
          <Text style={styles.textContent}>Olahraga</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lowerSectionContent}
          onPress={() => navigation.navigate("Teknologi")}
        >
          <Text style={styles.textContent}>Teknologi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lowerSectionContent}
          onPress={() => navigation.navigate("Hiburan")}
        >
          <Text style={styles.textContent}>Hiburan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lowerSectionContent}
          onPress={() => navigation.navigate("Gaya Hidup")}
        >
          <Text style={styles.textContent}>Gaya Hidup</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    marginVertical: 3,
  },
  scrollView: {
    flex: 1,
  },
  upperSection: {
    flex: 3,
    flexDirection: "row",
  },
  lowerSection: {
    flex: 4,
    marginHorizontal: 10,
  },
  lowerSectionContent: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "maroon",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  leftTop: {
    flex: 6,
    backgroundColor: "maroon",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 5,
    marginVertical: 5,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  rightTop: {
    flex: 5,
    flexDirection: "column",
    marginRight: 10,
    marginLeft: 5,
    justifyContent: "center",
  },
  rightTopContent: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "maroon",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  textContentLeftTop: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  textContent: {
    textAlign: "center",
    fontSize: 20,
    color: "maroon",
  },
});
