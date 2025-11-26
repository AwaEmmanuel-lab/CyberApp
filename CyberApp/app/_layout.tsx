import { HeaderShownContext } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import analytics from "./analytics";

export default function RootLayout() {
  return (
    <SafeAreaView style = {styles.bigContainer}>
      <Stack screenOptions={{headerShown:true}}>
      <Stack.Screen name="index" options={{title: "Home", headerShown:false}}/>
      <Stack.Screen name = "analytics" options = {{title: "Link Scanner", headerShown: true}}/>
      <Stack.Screen name = "Wifi.tsx" options = {{title: "Message Scanner", headerShown: true }}/>
      </Stack>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  bigContainer:{
    flex:1
  }
})
