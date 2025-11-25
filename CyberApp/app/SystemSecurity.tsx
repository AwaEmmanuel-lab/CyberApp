import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { createContext, useState } from 'react'
import Singlelist from '@/components/Singlelist';
import { list } from '@/hooks/uselistcontext';
import { useSystemSecurity } from '@/hooks/useSystemSecurity.js';



  const deviceSecurityQuestions = [
  // --- Section A: Device Access & Physical Security (Weight: 24 points) ---
  {
    id: "A1",
    question: "Do you use biometric security (Face ID, Touch ID, Fingerprint) or a complex alphanumeric passcode to lock your phone and computer?",
    category: "Device Access Method",
    weight: 3, // Critical
  },
  {
    id: "A2",
    question: "Have you disabled the ability to access control centers (like the notification shade or quick settings) from your locked screen?",
    category: "Locked Screen Evasion",
    weight: 2,
  },
  {
    id: "A3",
    question: "Have you enabled 'Find My Device' (iOS) or 'Find My Mobile' (Android/Windows) services so your devices can be remotely located or wiped?",
    category: "Anti-Theft Protection",
    weight: 3, // Critical
  },
  {
    id: "A4",
    question: "Do you set your phone, tablet, and computer to lock automatically after a short period of inactivity (e.g., 5 minutes or less)?",
    category: "Auto-Lock Timeout",
    weight: 2,
  },
  {
    id: "A5",
    question: "Do you avoid leaving your devices unattended in public places, even briefly?",
    category: "Physical Vigilance",
    weight: 2,
  },
  {
    id: "A6",
    question: "If using a computer, do you manually lock the screen (e.g., Windows Key + L or Ctrl+Cmd+Q) every time you step away?",
    category: "Manual Locking",
    weight: 2,
  },
  {
    id: "A7",
    question: "Do you use a screen protector or privacy filter on your screen when working in public to prevent 'shoulder surfing?'",
    category: "Visual Privacy",
    weight: 2,
  },
  {
    id: "A8",
    question: "Have you reviewed and restricted which apps are allowed to run in the background or access location services when the device is locked?",
    category: "Background Activity Control",
    weight: 2,
  },
  {
    id: "A9",
    question: "Do you clear your web browser's history, cache, and cookies regularly (or use incognito/private mode for sensitive tasks)?",
    category: "Local Data Cleanup",
    weight: 2,
  },
  {
    id: "A10",
    question: "Do you avoid charging your mobile device using unknown, public USB charging stations ('juice jacking')?",
    category: "USB Port Security",
    weight: 2,
  },

  // --- Section B: Operating System (OS) & Software Integrity (Weight: 27 points) ---
  {
    id: "B11",
    question: "Is your operating system (iOS, Android, Windows, macOS) set to install security updates automatically as soon as they are available?",
    category: "Patch Automation",
    weight: 3, // Critical
  },
  {
    id: "B12",
    question: "Have you recently updated or confirmed the version of your web browser (Chrome, Safari, Firefox) is the latest one available?",
    category: "Browser Patching",
    weight: 2,
  },
  {
    id: "B13",
    question: "Are all of your installed applications updated regularly, either automatically or manually?",
    category: "App Patching",
    weight: 2,
  },
  {
    id: "B14",
    question: "Do you use full-disk encryption (like BitLocker or FileVault) on your computer's hard drive?",
    category: "Data-at-Rest Protection",
    weight: 3, // Critical
  },
  {
    id: "B15",
    question: "Have you disabled unnecessary software features or services on your device (e.g., Bluetooth/Wi-Fi when not needed)?",
    category: "Surface Attack Minimization",
    weight: 2,
  },
  {
    id: "B16",
    question: "If you use Windows, is Windows Defender (or equivalent antivirus) running, active, and up to date?",
    category: "Antivirus Protection",
    weight: 3, // Critical
  },
  {
    id: "B17",
    question: "Have you configured your computer's firewall to block unsolicited incoming connections?",
    category: "Firewall Configuration",
    weight: 3,
  },
  {
    id: "B18",
    question: "Do you avoid using 'jailbroken' or 'rooted' mobile devices, which compromise the manufacturer's built-in security?",
    category: "OS Integrity",
    weight: 3, // Critical
  },
  {
    id: "B19",
    question: "Do you regularly check your device's storage and installed apps for unrecognized or unwanted programs?",
    category: "Unwanted Software Audit",
    weight: 3,
  },
  {
    id: "B20",
    question: "If you have children using your device, do you use parental controls or a separate, limited user profile for them?",
    category: "User Segregation",
    weight: 3,
  },

  // --- Section C: Permissions, Backups, and Data Control (Weight: 27 points) ---
  {
    id: "C21",
    question: "Do you routinely review and revoke excessive permissions given to mobile apps (e.g., camera access for a calculator app)?",
    category: "App Permission Control",
    weight: 3, // Critical
  },
  {
    id: "C22",
    question: "Do you regularly back up your critical data (photos, documents, work files) to a separate external drive or cloud service?",
    category: "Data Redundancy/Backup",
    weight: 3, // Critical
  },
  {
    id: "C23",
    question: "Do you regularly test your backups to ensure the files can actually be restored?",
    category: "Backup Reliability",
    weight: 2,
  },
  {
    id: "C24",
    question: "When sharing photos, do you remove metadata (like GPS location) before sending them?",
    category: "Metadata Privacy",
    weight: 2,
  },
  {
    id: "C25",
    question: "Do you use a Virtual Private Network (VPN) when connected to public or untrusted Wi-Fi networks?",
    category: "Network Tunneling",
    weight: 3, // Critical
  },
  {
    id: "C26",
    question: "When you discard old devices (phones, computers), do you perform a full factory reset and data wipe (or physical destruction) first?",
    category: "End-of-Life Data Erasure",
    weight: 3, // Critical
  },
  {
    id: "C27",
    question: "Do you ensure that your computer has a dedicated, non-administrator (standard) user account for daily work?",
    category: "Privilege Minimization",
    weight: 3,
  },
  {
    id: "C28",
    question: "Have you disabled automatic connection to known Wi-Fi networks to prevent your device from passively searching and broadcasting its location?",
    category: "Wi-Fi Probing Control",
    weight: 2,
  },
  {
    id: "C29",
    question: "Have you restricted access to your phone's microphone and camera so only essential apps (like the native camera app) can use them?",
    category: "Hardware Access Control",
    weight: 3,
  },
  {
    id: "C30",
    question: "Do you use a secure, encrypted messaging app (like Signal or WhatsApp with end-to-end encryption) for sensitive communication?",
    category: "Communication Security",
    weight: 3,
  },
];


const SystemSecurity = () => {

  

  const {answertosystemsecurityquestion} = useSystemSecurity();
  const [questions, setquestions] = useState(deviceSecurityQuestions);
  

  const removeitem = (itemid: String) => {
    setquestions(prev => prev.filter(item => item.id !== itemid))
  }


  const Singlelist3 = ({item}: {item:list}) => {
      return (
        <View style = {styles.container}>
          <Text>{item.question}</Text>
    
          <View style = {styles.viewForthetwobuttons}>
            <TouchableOpacity style = {styles.fortouchableopacity} onPress={() => {
              answertosystemsecurityquestion(item.id, 1);
              removeitem(item.id);
            }}>
            <Text style = {styles.textinbutton}>Yes</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style = {styles.fortouchableopacity} onPress={() => {
              answertosystemsecurityquestion(item.id, 0);
              removeitem(item.id);
            }}>
            <Text style = {styles.textinbutton}>No</Text>
          </TouchableOpacity>
          </View>
    
        </View>
      )
    }

  return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
      <Text style = {styles.header}>System Security Assesment</Text>

      <FlatList
      data={deviceSecurityQuestions}
      renderItem= {({item}) => <Singlelist3 item = {item}/>}
      keyExtractor={item => item.id}
      />

      <TouchableOpacity onPress={() => setquestions(deviceSecurityQuestions)}>
        <Text>Reset Questions</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SystemSecurity

const styles = StyleSheet.create({
  header:{
    textAlign: 'center',
    fontSize: 25,
    padding: 10
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