import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // const globalScreenOptions = {
  //   headerStyle: {
  //     backgroundColor: "#DDD5F1",
  //     // backgroundColor: '#51A3B1',
  //   },
  //   headerTitleStyle: {
  //     color: "#000000",
  //   },
  //   headerTintColor: "black",
  // };

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
