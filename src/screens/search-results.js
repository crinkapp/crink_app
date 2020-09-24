import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import globalStyle from "../styles";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import PublicationPreview from "../components/publication-preview";

const SearchResults = (props) => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await getPublicationsFromTag().then((res) => {
      const sortedPublication = res.data.reverse();
      setPublications(sortedPublication);
    });
    setRefreshing(false);
  }, []);

  const getPublicationsFromTag = async () => {
    return await axios.post(`${API_URL}search-publication-by-tag`, {
      tag_id: props.route.params.tag.id,
    });
  };

  useEffect(() => {
    if (props.route.params.isTag) {
      setLoading(true);
      getPublicationsFromTag()
        .then((res) => {
          const sortedPublication = res.data.reverse();
          setPublications(sortedPublication);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="#B96C55" />
      </View>
    );
  } else {
    return (
      <ScrollView
        backgroundColor="#fff"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={globalStyle.appScreen}>
          {publications.length > 0
            ? publications.map((prop, key) => {
                return (
                  <PublicationPreview
                    key={key}
                    publication={prop}
                    onPress={(publication) =>
                      props.navigation.navigate("Publication", {
                        publication,
                        actualUserId: props.route.params.userId,
                      })
                    }
                    goToProfile={(user) => {
                      props.navigation.navigate("Profile", {
                        user,
                        isActualUser:
                          parseInt(props.route.params.userId) === user.id
                            ? true
                            : false,
                      });
                    }}
                  ></PublicationPreview>
                );
              })
            : null}
        </View>
      </ScrollView>
    );
  }
};

export default SearchResults;
