import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, FlatList } from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('screen');

const transactions1=([
    {
        id:1,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '+₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:2,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:3,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '+₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:4,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:5,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '+₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:6,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:7,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:8,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:9,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:10,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '+₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:11,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:12,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
    {
        id:13,
        logo: require('../../assets/icons/visa-logo.png'),
        title1: 'Transaction #123',
        title2: 'Transfer to SBI',
        amount: '-₹244.00',
        date: 'Dec 24 2023',
    },
])

export default function Transactions ({navigation}) {
  return (
        <SafeAreaView style={styles.Main}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.arrow}>
                    <Image style={styles.arrowImage} source={require('../../assets/icons/back.png')} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Wallet</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.topTransactions}>
                    <Text style={styles.topTransactionsText}>
                        All Transactions
                    </Text>
                </View>
                <FlatList contentContainerStyle={styles.flatContainer}
                data={transactions1}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                <View style={styles.transactions1}>
                   <View style={styles.transLeft}>
                       <View style={styles.transLeftImg}>
                            <Image source={item.logo}/>
                       </View>
                       <View style={styles.transLeftText}>
                            <Text  style={styles.transText1}>
                                {item.title1}
                            </Text>
                            <Text  style={styles.transText2}>
                                {item.title2}
                            </Text>
                       </View>
                   </View>
                   <View  style={styles.transRight}>
                        <Text  style={styles.transTextR1}>
                            {item.amount}
                        </Text>
                        <Text  style={styles.transTextR2}>
                            {item.date}
                        </Text>
                   </View>
                </View>

            )}/>
            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        width,
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    topContainer: {
        width,
        height:47,
        paddingVertical: 8.72,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor:'#F4F4F4' ,    
      
    },
    arrow: {
        position: 'absolute',
        left:16.5,

        center: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 12,
        width: 16,

    },
    arrowImage: {
        height: 12,
        width: 16,
        
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight:'500',
        color: '#000',

    },
    mainContainer: {
        width: 375,
        height: 808,
        gap: 24,
        top: 20,
        paddingHorizontal: 15,
    },
    topTransactions: {
        width: 311,
        height: 28,
    },
    topTransactionsText: {
        fontFamily: 'Gordita Regular',
        fontWeight:'500',
        fontSize: 18,
        color: '#000',
    },
    flatContainer: {
        paddingBottom: 30,


    },
    transactions1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EAECF0'
    },
    transLeft:{
        width: 208,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:16,
        paddingRight: 24,
    },
    transLeftImg: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#EAECF0',
        width: 46,
        height:32,
        justifyContent:'center',
        alignItems:'center'

    },
    transLeftText: {
    },
    transText1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000'
    },
    transText2: {
        fontWeight: '400',
        fontSize: 12,
        color: '#676767'
    },
    transTextR1: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000'

    },
    transTextR2: {
        fontWeight: '400',
        fontSize: 12,
        color: '#676767'

    },
}
)