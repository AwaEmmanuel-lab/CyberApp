import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRiskmanagement } from '@/hooks/useRiskmanagement'
import { useAccountsecurity } from '@/hooks/useAccountsecurity'
import { useSystemSecurity } from '@/hooks/useSystemSecurity'

const Refresh = () => {

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
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default Refresh

const styles = StyleSheet.create({})