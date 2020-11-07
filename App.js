import * as React from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5
} from "@expo/vector-icons";

import LandingPage from "./components/LandingPage";
import SearchView from "./components/SearchView";
import MapsView from "./components/MapsView";
import FaqView from "./components/MapsView";

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="aliceblue"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "aliceblue" }}
    >
      <Tab.Screen
        name="Home"
        component={LandingPage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchView}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapsView}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-circle"
              size={24}
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Faq"
        component={FaqView}
        options={{
          tabBarLabel: "FAQ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={24}
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={Profile}
        options={{
          tabBarLabel: "Feedback",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="feedback" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} backgroundColor="dodgerblue" />
      <View style={styles.menu}>
        <FontAwesome5
          style={styles.titleIcon}
          name="umbrella-beach"
          size={24}
          color="white"
        />
        <Text style={styles.title}>Beach Congestion</Text>
      </View>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    flexDirection: "row"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  titleIcon: {
    marginRight: 10
  }
});
