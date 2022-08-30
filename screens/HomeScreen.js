import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerBlurEffect: "dark",
    });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
