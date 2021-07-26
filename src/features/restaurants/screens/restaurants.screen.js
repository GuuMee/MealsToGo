import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={Colors.orange800} />
          </LoadingContainer>
        )}
        <Search />
        <ListView>
          {console.log("Heeey Screeen")}
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              console.log("Item", item);
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantsDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <>
                    <RestaurantInfoCard restaurant={item} />
                  </>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </ListView>
      </SafeArea>
    </>
  );
};
