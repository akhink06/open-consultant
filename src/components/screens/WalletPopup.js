import { StyleSheet, Text, View,SafeAreaView} from 'react-native'
import React from 'react'

export default function WalletPopup() {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>WalletPopup</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
        opacity:.2
    },
    text:{
        color:'#000',
        fontSize:20,
        fontWeight:'700'
    },
})