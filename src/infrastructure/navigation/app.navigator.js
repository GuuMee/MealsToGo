import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  RestaurantsFocus: "md-restaurant-sharp",
  Restaurants: "md-restaurant-outline",
  MapFocus: "map-sharp",
  Map: "map-outline",
  SettingsFocus: "md-settings-sharp",
  Settings: "md-settings-outline",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = focused
              ? TAB_ICON.RestaurantsFocus
              : TAB_ICON.Restaurants;
          } else if (route.name === "Map") {
            iconName = focused ? TAB_ICON.MapFocus : TAB_ICON.Map;
          } else if (route.name === "Settings") {
            iconName = focused ? TAB_ICON.SettingsFocus : TAB_ICON.Settings;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
