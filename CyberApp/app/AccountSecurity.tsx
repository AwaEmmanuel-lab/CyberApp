import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { list } from '@/hooks/uselistcontext'
import { useAccountsecurity } from '@/hooks/useAccountsecurity.js'
import { accountSecurityQuestionsV2 } from '@/hooks/uselistcontext'






const AccountSecurity = () => {

  const {answertoaccountsecurityquestion} = useAccountsecurity();
  const [questions, setquestions] = useState(accountSecurityQuestionsV2);

  const removequestions = (itemid: String) => {
    setquestions( prev => prev.filter(item => item.id !== itemid))
  }

const Singlelist1 = ({item}: {item:list}) => {
  return (
    <View style = {styles.container}>
      <Text>{item.question}</Text>

      <View style = {styles.viewForthetwobuttons}>
        <TouchableOpacity style = {styles.fortouchableopacity} onPress={() =>{
          answertoaccountsecurityquestion(item.id, 1);
          console.log(item.id)
          console.log(1)
          console.log("Clicked Yes")
          removequestions(item.id);
        }}>
        <Text style = {styles.textinbutton}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.fortouchableopacity} onPress={() =>{
          answertoaccountsecurityquestion(item.id, 0);
          removequestions(item.id);

        }}>
        <Text style = {styles.textinbutton}>No</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}





  return (
    
    <View style = {{flex: 1, backgroundColor: '#FDEBA3'}}>
      <Text style = {styles.header}>Account Security Assesment</Text>

      <FlatList
      data={questions}
      renderItem= {({item}) => <Singlelist1 item = {item}/>}
      keyExtractor={item => item.id}
      />

      <TouchableOpacity onPress={() => setquestions(accountSecurityQuestionsV2)} style = {styles.resetbtn}>
        <Text>Reset Questions</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AccountSecurity

const styles = StyleSheet.create({
  header:{
    textAlign: 'center',
    fontSize: 25,
    padding: 10
  },
  resetbtn:{
    alignItems: "center",
    justifyContent: 'center',
    padding: 3
  },
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
        backgroundColor: "#d1a209ff",
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowOpacity:0.5,
        shadowRadius: 15
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

