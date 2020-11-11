import React from "react";
import {
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BASE_URL = "https://www.news.developeridn.com/olahraga";

export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      newsData: {},
    };
  }

  componentDidMount() {
    this.getAllNews();
  }

  getAllNews() {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          newsData: json,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    const { newsData } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={newsData.data}
          keyExtractor={(item, index) => `${item}--${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => {
                Linking.openURL(item.link);
              }}
            >
              <Image
                style={styles.img}
                source={{
                  uri: item.poster,
                }}
              />
              <View style={styles.rightContainer}>
                <View style={styles.head}>
                  <Text style={styles.timePosted}>{item.waktu}</Text>
                </View>
                <Text style={styles.headline} numberOfLines={2}>
                  {item.judul}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    marginVertical: 5,
  },
  touchable: {
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 8,
    marginVertical: 2.5,
    flexDirection: "row",
    alignSelf: "baseline",
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  img: {
    width: 80,
    height: 80,
    marginHorizontal: 1,
    marginVertical: 1,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 5,
  },
  head: {
    flex: 1,
    flexDirection: "row",
  },
  timePosted: {
    flex: 1,
    fontSize: 10,
    color: "gray",
  },
  headline: {
    flex: 3,
    fontSize: 15,
    textAlign: "justify",
  },
  mainContainer: {
    paddingTop: 50,
  },
});
