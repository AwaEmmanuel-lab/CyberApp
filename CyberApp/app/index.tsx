import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity , RefreshControl} from "react-native";
import Bottombar from "@/components/Bottombar";
import Dashboard from "@/components/Dashboard";
import { useCallback, useEffect, useState } from "react";
import { useAccountsecurity } from "@/hooks/useAccountsecurity";
import { useRiskmanagement } from "@/hooks/useRiskmanagement";
import { useSystemSecurity } from "@/hooks/useSystemSecurity";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Refresh from "@/components/Refresh";

export default function Index() {
  const {accountscore, accisLoading, accloaddata, fetchaccountsecurityscore} = useAccountsecurity()
  const {fetchriskscore, riskisLoading, riskloaddata, riskscore} = useRiskmanagement()
  const {systemsecurityscore, sysisLoading, sysloaddata, fetchsystemsecurityscore} = useSystemSecurity()
  
  useEffect(() => {
  accloaddata()
}, [accountscore, accisLoading])

useEffect(() => {
  riskloaddata()
}, [riskscore, riskisLoading])

useEffect(() => {
  sysloaddata()
}, [systemsecurityscore, sysisLoading])

const [refreshing, setRefreshing] = useState(false);

const onRefresh = useCallback(async () => {
  setRefreshing(true);

  // 🔄 Call all your backend loaders here
  await accloaddata();
  await riskloaddata();
  await sysloaddata();

  setRefreshing(false);
}, []);


  
  return (
    <View
      style={styles.container}
    >

        <ScrollView style = {styles.subContainer} refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }>
      <LinearGradient colors={['#020213ff', '#020213ff','#020213ff','#020213ff','#020213ff','#ffffffff']} style={{flex: 1, borderTopEndRadius:15, borderTopStartRadius:15}}>
        <View style = {styles.upmostcontainer}>
          <Ionicons name = 'menu-sharp' size={30} color={"#D3AF37"}/>

          
          <View style = {{marginRight: 24}}>
            <Text style = {{color: "#D3AF37", fontSize:25}}>SafeNet</Text>
          </View>
          <Ionicons name = 'person-circle-sharp' size={30} color={"#D3AF37"} style = {{paddingTop: 5}}/>
        </View>
        <View style={styles.toptextcontainer}>
              <Text style={[styles.toptext, {fontSize: 20}]}>Security isn't a feature</Text>
              <Text style={[styles.toptext, {fontSize: 15}]}> it's a foundation</Text>
          </View>
        <View style = {styles.containerforimage}>
        <Image source={require('../assests/cybersec.jpg')} style = {{width: '100%', height: '100%', resizeMode: 'cover'}}/>    
        </View>

        <View >
          <Text style = {styles.undertheimage}> Assesment Scores</Text>
        </View>

        <View style = {[styles.listcontainers, {marginTop: 30}]}>
        <Text style = {styles.text}>Account score: {((accountscore/30)*100).toFixed(1)}%</Text>
        <View style = {styles.trackerContainer}>
          <View style = {[styles.tracker, {width: `${(accountscore/30)*100}%`},  (accountscore/30)*100 > 50? {backgroundColor: '#0dd806ff'}:
            {backgroundColor: '#ff1414ff' }
          ]}></View>
        </View>
      </View>
      <View style = {styles.listcontainers}>
        <Text style = {styles.text}>Risk score: {((riskscore/30)*100).toFixed(1)}%</Text>
        <View style = {styles.trackerContainer}>
          <View style = {[styles.tracker, {width: `${(riskscore/30)*100}%`}, (riskscore/30)*100 > 50? {backgroundColor: '#0dd806ff'}:
            {backgroundColor: '#ff1414ff' }]}></View>
        </View>
      </View>
      <View style = {styles.listcontainers}>
        <Text style = {styles.text}>Systme security score: {((systemsecurityscore/30)*100).toFixed(1)}%</Text>
        <View style = {styles.trackerContainer}>
          <View style = {[styles.tracker, {width: `${(systemsecurityscore/30)*100}%`}, (systemsecurityscore/30)*100 > 50? {backgroundColor: '#0dd806ff'}:
            {backgroundColor: '#ff1414ff' }]}></View>
        </View>
      </View>
    </LinearGradient>
      </ScrollView>
      
      <Bottombar/>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"white"
  },
  upmostcontainer:{
    justifyContent: 'space-between',
    padding:15,
    flexDirection: 'row'
  },
  toptextcontainer:{
    padding:20
  },
  toptext:{
    fontWeight:'bold',
    color:'#D3AF37'
  },
  subContainer:{
    flex:1,
    backgroundColor:"white"
  },
  listcontainers:{
    borderWidth: 1,
    marginBottom:25,
    marginEnd:15,
    marginStart:15,
    padding:25,
    borderRadius:15,
    borderColor:"#dabe63ff",
    shadowColor: '#000000ff',
    shadowOffset: {width: 3,height:3},
    shadowOpacity:0.3,
    backgroundColor: '#ffffff'
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  },
  trackerContainer:{
    width:'100%',
    backgroundColor:'#e0e0e0ff',
    marginTop:10

  },
  containerforimage:{

    marginTop:15,
    height: '30%',
    // marginTop:10,
    // marginEnd:10,
    // marginStart:10,
    padding:10,
    backgroundColor: '#020213ff',
    borderTopStartRadius:15,
    borderTopEndRadius:15,
    overflow: 'hidden'
  },
  tracker:{
    
    // marginTop:25,
    //width:'50%',
    padding:2,
    backgroundColor:'#0dd806ff',
    borderRadius: 15,
  },
  undertheimage:{
    paddingLeft:15,
    paddingTop:30,
    fontWeight:'bold',
    fontSize:25,
    color:'#ffffff'
  }
})
