import { StyleSheet, Text, View } from "react-native";
import Bottombar from "@/components/Bottombar";
import Dashboard from "@/components/Dashboard";
import { useEffect } from "react";
import { useAccountsecurity } from "@/hooks/useAccountsecurity";
import { useRiskmanagement } from "@/hooks/useRiskmanagement";
import { useSystemSecurity } from "@/hooks/useSystemSecurity";

export default function Index() {
  const {accountscore, accisLoading, accloaddata, fetchaccountsecurityscore} = useAccountsecurity()
  const {fetchriskscore, riskisLoading, riskloaddata, riskscore} = useRiskmanagement()
  const {systemsecurityscore, sysisLoading, sysloaddata, fetchsystemsecurityscore} = useSystemSecurity()
  
  useEffect(() => {
    accloaddata()
    riskloaddata()
    sysloaddata()
  }, [accloaddata])
  
  return (
    <View
      style={styles.container}
    >
      <View style = {styles.subContainer}>
        <Dashboard/>
      </View>
      <text>This is the account score: {accountscore}</text>
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
