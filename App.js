import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import appcontacts from "./src/pages/appcontacts";

const Tab = createBottomTabNavigator();
export default function App(){

  function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="appcontacts" component={appcontacts}/>

    </Tab.Navigator>
  )
}}

