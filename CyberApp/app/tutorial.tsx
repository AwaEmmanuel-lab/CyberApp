import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const tutorial = () => {

  const router = useRouter();


  
  return (
    <ScrollView showsVerticalScrollIndicator = {false} style = {{flex:1, backgroundColor:'#fff'}}>

      <View>
        <Text style = {styles.title}>Assesment</Text>
      </View>

      <View>
        <Text style = {styles.upnote}>
          Want to know what you are doing right or wrong?
        </Text>
      </View>

      <View style = {{paddingBottom:10}}>
        <Text style = {styles.upnote}>
          Select An Assesment to begin
        </Text>
      </View>

      
        <TouchableOpacity onPress={() => {
          router.push('/AccountSecurity')
        }}>
          <LinearGradient colors={["#000000ff","#0f0a57ff"]} style={styles.view1} start={{x:0, y: 0}} end={{x:1,y:1}}>
              <View>
            <Text style={styles.innertext}>
              Account Security Assessment
            </Text>
            <Ionicons name='shield-checkmark-sharp' size={60} color="white" />
          </View>
          </LinearGradient>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          router.push('/SystemSecurity')
        }}>
          <LinearGradient colors={["#000000ff","#0f0a57ff"]} style={styles.view1} start={{x:0, y: 0}} end={{x:1,y:1}}>
          <View>
            <Text style={styles.innertext}>
              Device & System Security Assessment
            </Text>
            <Ionicons name= 'desktop-sharp' size={60} color="white" />
          </View>
          </LinearGradient>
        </TouchableOpacity>
      

      <TouchableOpacity onPress={() => {
          router.push('/Riskmanagement')
        }}>
          <LinearGradient colors={["#000000ff","#0f0a57ff"]} style={styles.view1} start={{x:0, y: 0}} end={{x:1,y:1}} >
          <View>
            <Text style={styles.innertext}>
              Risk Management Assessment
            </Text>
            <Ionicons name= 'alert-circle-sharp' size={60} color="white" />
          </View>
          </LinearGradient>
        </TouchableOpacity>

        <Text style = {styles.endnote}>End of Assesment</Text>

    </ScrollView>
  )
}

export default tutorial

const styles = StyleSheet.create({

  view1:{
    margin: 10,
    padding: 15,
    minHeight: 120,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset:{width:5, height:5},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 10,
  },
  endnote:{
    textAlign: 'center',
    fontStyle:'italic',
    paddingTop:50
  },
  innertext:{
    fontSize:20,
    color: '#ffffff',
  },
  upnote:{
    textAlign: 'center',
    fontSize: 14,
    fontStyle:'italic'
  }
})