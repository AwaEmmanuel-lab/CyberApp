import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { list } from '@/hooks/uselistcontext'

const Singlelist = ({item}: {item:list}) => {
  return (
    <View style = {styles.container}>
      <Text>{item.question}</Text>

      <View style = {styles.viewForthetwobuttons}>
        <TouchableOpacity style = {styles.fortouchableopacity}>
        <Text style = {styles.textinbutton}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.fortouchableopacity}>
        <Text style = {styles.textinbutton}>No</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default Singlelist

const styles = StyleSheet.create({
    container:{
        // borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        marginStart: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3
        },
    },
    viewForthetwobuttons:{
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-evenly',
      width: '100%',
      marginTop: 10
    },
    fortouchableopacity:{
      borderWidth: 1,
      borderRadius: 50
    },
    textinbutton:{
      padding: 10,
      fontWeight: 'bold',
    }
})