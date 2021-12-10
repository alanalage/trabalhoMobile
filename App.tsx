import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "./src/components/Home";
import Add from "./src/components/produto/input/Add";
import Edit from "./src/components/produto/input/Edit";
import Listar from "./src/components/produto/input/list/List";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Novo" component={Add}/>
          <Stack.Screen name="Editar" component={Edit}/>
          <Stack.Screen name="Listar" component={Listar}/>
        </Stack.Navigator>
      </NavigationContainer>
    )

   
}
export default App