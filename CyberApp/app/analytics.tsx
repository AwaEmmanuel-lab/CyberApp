import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { Icon } from "react-native-unified-icons";
//import { analyticsstyle } from '@/assests/analytics.styles';

const analyzer = () => {

  const [link, setLink] = useState<string>("")
  const [status, setstatus] = useState<number>(0)


  const styles = analyticsstyle(status)

  const handleOnClick = (link: string) => {
    let checker = 0
    
    //const involvestring = examplestring.includes("enjoy")
    // const string = "https://google.com"
    const badWords = ["free", "win", "claim", "bonus", "gift", "verify", "login", "reward", "promo"];
    const badTLDs = [".xyz", ".tk", ".click", ".pw", ".link", ".top"];
    const dangerPaths = ["login", "verify", "bank", "reset", "secure"];
    const phishingPatterns = ["0", "@", "1", "3", "$"];
    let subdomains = link.split(".").length


    phishingPatterns.forEach((value) => {
      if(link.includes(value)){
        checker += 20
      }
    })
    
    if(!link.startsWith("https://")){
      checker += 10
    }

    badWords.forEach((element) => {
      if(link.includes(element)){
         checker += 30
      }
    });

    badTLDs.forEach((value) => {
      if(link.endsWith(value)){
         checker += 15
      }
    })

    if(link.length > 80){
      checker += 10
    }

    if(subdomains > 4){
      checker += 10
    }

    dangerPaths.forEach((value) => {
      if(link.includes(value)){
        checker += 10
      }
    })

    if (link.includes("?") && link.includes("=")) checker += 10;
    

    if(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(link)){
       checker += 25
    }

    const numofnum = link.replace(/[^0-9]/g, "").length

    if(numofnum > 8){
      checker += 10
    }

    let progress = Math.min(checker, 100);
    progress = progress/100
    setstatus(progress)
  }

  

  return (

    
      <View style = {styles.container}>
      
        <Text style = {styles.Text}>Link Scanner</Text>

        <View style = {styles.trackerContainer}>
          <Text style = {styles.textforinnerContainer}>{status * 100}%</Text>
          <View style = {[styles.tracker, status*100 > 70? {backgroundColor:"#ff2121ff"}: status*100 >= 20? {backgroundColor: "#ffe608ff"}:{backgroundColor:"green"} ]}></View>
        </View>

        {status*100 > 70?
        <View style = {styles.ordinaryview}>
          <Ionicons name= 'close-circle' size={50} color= "#ff2121ff"/>
          <Text style = {[styles.textinbutton, {fontSize:35, color: "#ff2121ff"}]}>Dangerous</Text>
          <Text style = {[styles.textinbutton, {fontSize:35, color: "#ff2121ff"}]} >{status*100}% Vulnerability</Text>
        </View>
        : status*100 >= 20? 
        <View style = {styles.ordinaryview}>
          <Ionicons name = 'alert-sharp' size={50} color= "#c2af04ff"/>
          <Text style = {[styles.textinbutton, {fontSize:35, color: "#c2af04ff"}]} >Suspicious</Text>
          <Text style = {[styles.textinbutton, {fontSize:35, color: "#c2af04ff"}]} >{status*100}% Vulnerability</Text>
        </View>
        : status*100 >= 0?
        <View style = {styles.ordinaryview}>
          <Ionicons name= 'shield-checkmark-sharp' size={50} color = 'green'/>
          <Text style = {[styles.textinbutton, {fontSize:35, color:'green'}]} >Safe</Text>
          <Text style = {[styles.textinbutton, {fontSize:35, color: "green"}]} >{status*100}% Vulnerability</Text>
        </View>
        :<View></View>
        }

      <TextInput placeholder='Enter a Valid Url' value = {link} onChangeText={words => {
        setLink(words)
      }} onFocus={() => {}} onBlur={() => {}} style ={styles.textinput}/>
      <TouchableOpacity style = {styles.button} onPress={() =>{
        handleOnClick(link)
        setLink("")
      }}>
        <Text style = {styles.textinbutton}>Check  Link</Text>
      </TouchableOpacity>
      </View>

      
    
  )
}

export default analyzer




function analyticsstyle (width: number) {

  

    const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    trackerContainer:{
      flexDirection:"row",
      borderWidth: 2,
       minWidth:300,
      //width: '100%',
      borderColor:"#e9c5adff",
      backgroundColor: "#000000",
      marginTop: 15,
      justifyContent:'flex-start',
      alignItems:'center',
      borderRadius:20
    },
    textforinnerContainer:{
      paddingLeft:10,
      fontWeight: 'bold',
      fontSize: 20,
      color:"white"
    },
    tracker:{
      width: width * 200,
      height:2,
      //backgroundColor:"#00d300ff",
      borderRadius:20,
      marginRight:15,
      marginLeft:15
    },
    Text:{
      fontWeight: "bold",
      fontSize: 30
    },
    textinput:{
      borderWidth:1,
      borderColor:"#D3AF37",
      marginTop: 25,
      padding: 10,
      minWidth:300,
      borderRadius:15
    },
    button:{
      marginTop:16,
      padding: 8,
      borderRadius:15,
      backgroundColor: "#D3AF37"
    },
    textinbutton:{
      color: "white",
      fontWeight: "bold",
    },
    ordinaryview:{
      justifyContent: 'center',
      alignItems:'center'
    }
})

return styles

}

