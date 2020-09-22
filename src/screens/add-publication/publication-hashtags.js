import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import globalStyle from "../../styles";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

const HashtagsPublication = (props) => {
  const [publication, setPublication] = useState(
    props.route.params.publication
  );
  const [tags, setTags] = useState([]);
  const [selected, setSelected] = useState([]);

  const getTags = async () => {
    return await axios.get(`${API_URL}/tags`).then((res) => {
      setTags(res.data);
    });
  };

  const onSelectTag = (key) => {
    if (!selected.includes(key)) {
      setSelected([...selected, key]);
    } else {
      const remove = selected.filter((tag) => tag !== key);
      setSelected(remove);
    }
  };

  const onNext = () => {
    // props.navigation.navigate("HashtagsPublication", {
    //   publication: { title },
    // });
    const newItem = {
      ...publication,
      hashtags: selected,
    };
    console.log(newItem);
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <ScrollView backgroundColor="#fff">
      <View style={globalStyle.addPublicationScreen}>
        <Text style={{color: "#3A444C", fontWeight: "300"}}>1. {publication.title}</Text>
        <Text style={styles.title}>
          Choisis les tags qui concernent ta publication :
        </Text>
        <View style={styles.cardsView}>
          {tags.map((prop, key) => {
            return (
              <TouchableWithoutFeedback
                key={key}
                onPress={() => onSelectTag(key)}
              >
                <ImageBackground
                  style={[
                    styles.card,
                    { opacity: selected.includes(key) ? ".9" : "1" },
                  ]}
                  imageStyle={{ borderRadius: 4 }}
                  source={{ uri: `${S3_URL}${prop.path_image}` }}
                >
                  <Text key={key} style={styles.tagLabel}>
                    #{prop.name_tag}
                  </Text>
                  {selected.includes(key) ? (
                    <Icon
                      name="check-circle"
                      size={24}
                      color="#fff"
                      solid
                      style={{ padding: 10 }}
                    ></Icon>
                  ) : null}
                </ImageBackground>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <TouchableOpacity
          style={[
            styles.nextBtn,
            { backgroundColor: selected.length === 0 ? "#9C9C9C" : "#3A444C" },
          ]}
          onPress={() => onNext()}
          disabled={selected.length === 0 ? true : false}
        >
          <Text style={styles.nextLabel}>Suivant</Text>
          <Icon name="forward" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HashtagsPublication;

const rows = 6;
const cols = 3;
const marginHorizontal = 3;
const marginVertical = 3;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get("window").height / rows - marginVertical * (rows + 1);

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 22,
    color: "#3A444C",
    fontWeight: "600",
  },
  cardsView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  card: {
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: "100%",
    height: height,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  nextBtn: {
    marginTop: 45,
    width: "100%",
    backgroundColor: "#3A444C",
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nextLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    marginRight: 10,
  },
  tagLabel: {
    color: "#fff",
    fontSize: 18,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
  },
});
