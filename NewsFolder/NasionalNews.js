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
  RefreshControl,
} from "react-native";

const BASE_URL = "https://www.news.developeridn.com/nasional";

export default function News() {
  const [newsData, setNewsData] = React.useState({});

  const getAllNews = async () => {
    try {
      let response = await fetch(BASE_URL, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        Vary: "Origin",
        headers: {
          "Access-Control-Allow-Origin":
            "https://www.news.developeridn.com/nasional",
        },
      });
      let jsonData = await response.json();
      setNewsData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAllNews();
  });

  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(newsData);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (listData.length < 10) {
      try {
        let response = await fetch("https://www.news.developeridn.com/");
        let responseJson = await response.json();
        console.log(responseJson);
        setListData(responseJson.result.concat(initialData));
        setRefreshing(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setRefreshing(false);
    }
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newsData.data}
        keyExtractor={(item, index) => `${item}--${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              Linking.openURL(item.link);
            }}
          >
            <View style={styles.leftContainer}>
              <Image
                style={styles.img}
                source={{
                  uri: item.poster,
                }}
              />
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.head}>
                <Text style={styles.timePosted}> {item.waktu}</Text>
                <Text style={styles.category}>{item.tipe} </Text>
              </View>
              <View style={styles.body}>
                <Text style={styles.headline} numberOfLines={2}>
                  {item.judul}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    marginVertical: 5,
  },
  touchable: {
    borderRadius: 5,
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
  leftContainer: {
    backgroundColor: "white",
    padding: 1,
    borderRadius: 5,
  },
  img: {
    width: 80,
    height: 80,
    marginHorizontal: 1,
    marginVertical: 1,
    borderRadius: 5,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 5,
  },
  head: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#800000",
    paddingHorizontal: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    alignItems: "center",
  },
  timePosted: {
    flex: 3,
    fontSize: 10,
    color: "white",
  },
  category: {
    flex: 1,
    fontSize: 10,
    color: "white",
    textAlign: "right",
  },
  body: {
    flex: 7,
    flexDirection: "column",
    backgroundColor: "white",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    justifyContent: "center",
    alignContent: "center",
  },
  headline: {
    flex: 1,
    fontSize: 15,
    textAlign: "justify",
    paddingHorizontal: 5,
    paddingTop: 5,
  },
});
