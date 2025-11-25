import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Dashboard = () => {
  return (
    <LinearGradient colors={["#000000ff","#0f0a57ff"]} start={{x:0, y:0}} end={{x:1,y:1}} style = {styles.dashboardConatiner}>
        <View>
            <Text>Dashboard</Text>
        </View>
    </LinearGradient>
    
  )
}

export default Dashboard

const styles = StyleSheet.create({

    gradientcontainer:{
        flex:0.3
    },
    dashboardConatiner:{
        flex:0.3,
        borderWidth:1,
        marginRight: 4,
        marginLeft:4,
        marginTop: 4,
        borderColor:"#C0C0C0",
        padding:8,
        borderRadius:15,
        shadowColor:"#C0C0C0",
        shadowOpacity: 1,
        shadowOffset: {height: 3, width: 3}
    }
})