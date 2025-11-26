import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ionicons, { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

const Bottombar = ({}) => {

  const router = useRouter();

  let size = 25

  return (
    
    //<View style = {styles.Bottombar}>

      <LinearGradient colors={["#D3AF37","#ffffffff"]} start={{x:0, y:0}} end={{x:1,y:1}} style = {styles.Bottombar}>
        <TouchableOpacity onPress={() =>{
        // router.push()
      }}>
        <Ionicons name = "home-sharp" size={size} color={"#000000ff"}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        router.push("/analytics")
      }}>
        <Ionicons name = "scan" size={size} color={"#000000ff"}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>{
        router.push("/MSGScanner")
      }}>
        <Ionicons name = 'text-sharp' size={size} color={"#000000ff"}/>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() =>{
        router.push("/tutorial")
      }}>
        <Ionicons name = "school-sharp" size={size} color={"#000000ff"}/>
      </TouchableOpacity>
      </LinearGradient>
          
      
    //</View>
  )
}

export default Bottombar


const styles = StyleSheet.create({
  Bottombar:{
    borderWidth:1,
    borderColor:"#fff",
    flexDirection:"row",
    marginBottom:20,
    marginRight:20,
    marginLeft:20,
    padding:20,
    shadowColor:"black",
    shadowOffset:{width: 5, height: 5}, 
    shadowOpacity: 0.8,
    shadowRadius:5,
    borderRadius: 20,
    justifyContent: "space-around"
  }
})