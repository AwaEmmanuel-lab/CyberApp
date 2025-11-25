import { StyleSheet, Text, View } from "react-native";
import Bottombar from "@/components/Bottombar";
import Dashboard from "@/components/Dashboard";
import { useEffect } from "react";
import { useAccountsecurity } from "@/hooks/useAccountsecurity";

export default function Index() {
  const {accountscore, accisLoading, accloaddata} = useAccountsecurity()
  
  useEffect(() => {
    accloaddata()
  }, [accloaddata])
  
  return (
    <View
      style={styles.container}
    >
      <View style = {styles.subContainer}>
        <Dashboard/>
      </View>
      <Bottombar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"white"
  },
  subContainer:{
    flex:1,
    backgroundColor:"white"
  }
})
