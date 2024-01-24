import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions, FlatList, Modal, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import WalletSuccess from './WalletSuccess';
const {width,height} = Dimensions.get('screen');
const banks = ([
    {
        id: 1,
        logo: require('../../assets/icons/sbi.png'),
        title1: 'State Bank of India',
        title2:'SBIN0001888',
    },
    {
        id: 2,
        logo: require('../../assets/icons/hdfc.png'),
        title1: 'HDFC Bank',
        title2:'HDFC0000011',
    },

])
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
])


const Wallet = ({navigation}) => {
    const [popup, setPopup] = useState(false)
    const [popup1, setPopup1] = useState(false)
    const [amount,setAmount]=useState('')
    const [active,setActive]=useState(0)

    const handlePopup =()=>{
        setPopup(false)
        setPopup1(true)
    }
    const updatePopup = (action)=>{
        switch(action.type){
            case 'CLOSE':
                setPopup1(false)
                break;
            default: 
                break;
        }
    }

   
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
        <View style={styles.middle}>
            <View style={styles.balance}>
                <Text style={styles.balanceText}>My Balance</Text>
                <Text style={styles.balanceNumber}>₹ 2000.
                    <Text style={styles.decimal}>00</Text>
                </Text>
            </View>
            
            <View style={styles.total}>
                <View style={styles.left}>
                    <Text style={styles.transactions}>Total Transactions</Text>
                    <Text style={styles.transactionsnumb}>15</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.earning}>Total Earning</Text>
                    <Text style={styles.earningnumb}>₹ 2500</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>setPopup(true)}  style={styles.withdrawal}>
                <Text style={styles.request}>Request Withdrawal</Text>
            </TouchableOpacity>
            <Modal 
            transparent= {true}
            visible={popup}>
                
                <View style={styles.requestWithdrawal}>
                    <View style={styles.modal}>
                        
                        <View style={styles.modalHeader}>
                            <View style={styles.modalHeaderTop}>
                                <View style={styles.modalHeaderBank}>
                                    <Image style={styles.modalHeaderBankImg} source={require('../../assets/icons/bank.png')}/>
                                </View>
                                <TouchableOpacity onPress={()=>{setPopup(false),setAmount('')}} style={styles.modalHeaderClose}>
                                    <Image style={styles.modalHeaderCloseImg} source={require('../../assets/icons/close.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalHeaderBottom}>
                                <Text style={styles.modalHeaderBottomText}>
                                    Request Bank Transfer
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalInput}>
                            <Text style={styles.modalBankTransfer}>Amount Bank Transfer</Text>
                            <TextInput 
                            style={styles.modalInputText}
                            placeholder='₹0.00'
                            keyboardType='numeric'
                            value={amount}
                            onChangeText={setAmount}
                            />
                        </View> 
                        <View style={styles.modalMiddle}>
                            <View style={styles.modalMiddleTop}>
                                 <Text style={styles.modalMiddleTopText1}>Account Preference</Text>
                                 <Text style={styles.modalMiddleTopText2}>Select where to receive payment</Text>
                            </View>
                            <FlatList contentContainerStyle={styles.flatlist2}
                                data={banks}
                                showsVerticalScrollIndicator={false}
                                renderItem={({item})=>(
                                    <TouchableOpacity onPress={()=>setActive(item.id)} style={active==item.id? styles.modalMiddleBankActive : styles.modalMiddleBank}>
                                        <View style={styles.bankFirstContainer}>
                                            <View style={styles.bankLogoContainer}>
                                                <Image style={styles.bankLogo} source={item.logo}/>
                                                
                                            </View>
                                            <View style={styles.bankNameContainer}>
                                                <Text style={styles.bankName}>
                                                    {item.title1}
                                                </Text>
                                                <Text style={styles.bankAccount}>
                                                    {item.title2}
                                                </Text>
                                            </View>
                                        </View>
                                        
                                        <View style={active==item.id? styles.circleContainerActive : styles.circleContainer}>
                                            <View style={active==item.id? styles.innerCircleActive :styles.innerCircleActive }></View>
                                        </View>

                                    </TouchableOpacity>
                                    
                                )}
                            />
                            <TouchableOpacity onPress={()=>{handlePopup(),updatePopup,setAmount('')}} style={styles.sentRequest}>
                                <Text style={styles.sentRequestText}>Sent Request</Text>
                            </TouchableOpacity>
                           
                        </View>  
                    </View>
                </View>
            </Modal>
            {<WalletSuccess data={popup1} updatePopup={updatePopup}/>}
        </View>
        <View style={styles.bottom}>
            <View style={styles.recent}>
                <Text style={styles.recentLeft}>Recent Transactions</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Transactions')} style={styles.recentRight}>
                    <Text style={styles.recentText}>View all</Text>
                </TouchableOpacity>
                
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

export default Wallet;



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
    middle: {
        width:width-32,
        height: 269,
        top: 20,
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 6,
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: 'center',

    },
    balance:{
        width: 169,
        height: 62,
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    balanceText: {
        fontWeight:'500',
        fontSize: 16,
        lineHeight: 22.8,
        justifyContent: 'center',
        color:'#000',
    },
    balanceNumber: {
        fontWeight:'500',
        fontSize: 32,
        lineHeight: 45.6,
        justifyContent: 'center',
        color:'#000',
    },
    decimal: {
        fontWeight:'500',
        fontSize: 24,
        lineHeight: 34.2,
        justifyContent: 'center',
        color:'#A0A0A0',
    },
    total: {
        flexDirection: 'row',
        width: 311,
        height: 69,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    left:{
        width: 147.5,
        height:  69,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#F4F4F4',
        padding: 12,
        gap: 5,
        
    },
    right:{
        width: 147.5,
        height:  69,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#F4F4F4',
        padding: 12,
        gap: 5,
    },
    transactions: {
        fontWeight:'400',
        fontSize: 14,
        lineHeight: 21,
        color:'#3E3E3E'
    },
    transactionsnumb: {
        fontWeight:'400',
        fontSize: 14,
        lineHeight: 21,
        color:'#000'
    },
    earning: {
        fontWeight:'400',
        fontSize: 14,
        lineHeight: 21,
        color:'#3E3E3E'
    },
    earningnumb: {
        fontWeight:'400',
        fontSize: 14,
        lineHeight: 21,
        color:'#000'
    },
    withdrawal: {
        width: '100%',
        height: 42,
        borderRadius: 6,
        padding: 10,
        gap: 10,
        backgroundColor: '#0FA76F',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    request: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 19.95,
        color: '#ffff'
    },
    bottom: {
        width:360,
        height: 500,
        marginTop:45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#EAECF0',
    },
    recent: {
        
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal:15,
        paddingVertical:15,
        marginBottom: 20,

    },
    recentLeft: {
        width: 272,
        height: 28,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 28,
        color: '#101828',
    },
    recentRight: {
        
        width: 82,
        height: 20,
        marginTop:5,
    },
    recentText: {
        width:50,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#0FA76F',
        textDecorationLine:'underline',
    },
    flatContainer: {
        paddingHorizontal: 15,
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
    requestWithdrawal: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width,
        paddingHorizontal: 16,
       

    },
    modal: {
        backgroundColor: '#fff',
        width: width - 55,
        borderRadius:12,
        paddingHorizontal: 16,
    },
    modalHeader: {
        backgroundColor: '#fff',
        width:'100%',
        paddingTop: 20,
        borderRadius:12,
        marginBottom: 15,
    },
    modalHeaderTop: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginBottom:15,
    },
    modalHeaderBottom:{
        width: 311,
        height: 23,
    },
    modalHeaderBottomText: {
        paddingLeft: 5,
        fontWeight: '500',
        fontSize: 16,
        color: '#2D2D2D',
    },
    modalHeaderBank: {
        width: 48,
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#EAECF0',
        justifyContent:'center',
        alignItems: 'center',
        top: 3.02,
        left: 3,

    },
    modalHeaderBankImg: {
        width: 18,
        height: 17.98,
        borderRadius: 1,
    },
    modalHeaderClose: {
        width: 44,
        height: 44,
        borderRadius: 8,
        padding: 8,
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    modalHeaderCloseImg: {
        width: 12,
        height: 12,
        top: 6,
        left: 6,
        borderWidth: 1,
        
    },
    modalHeaderTextContainer: {
        width: 311,
        height: 23,
        gap: 4,
    },
    modalHeaderText: {
        width: 311,
        height: 23,
    },
    modalInput: {
        width: '100%',
        


    },
    modalBankTransfer: {
        width: 311,
        height: 20,
        fontSize: 14,
        fontWeight:'500',
        color:'#3E3E3E',
        paddingLeft: 5,
    },
    modalInputText: {
        width: 295,
        fontSize: 28,
        fontWeight:'500',
        color:'#ECECEC',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        gap: 8,
        borderColor: '#F4F4F4'
    },
    modalMiddle: {
        width:'100%',
        marginVertical: 18,
          
    },
    modalMiddleTop: {
        width:280,
        paddingLeft: 5,
    },
    modalMiddleTopText1: {
        color:'#000',
        width:280,
        fontSize: 14,
        fontWeight:'500',
        marginBottom: 5,
    },
    modalMiddleTopText2: {
        width:280,
        fontSize: 14,
        fontWeight:'400',
    },
    flatlist2: {
        width:'100%',
        alignItems:'center',
        marginTop: 12,
        minHeight:10,
        maxHeight:200
    },
    modalMiddleBank: {
        width:'100%',

        flexDirection:'row',
        padding: 16,
        borderWidth:  1,
        borderRadius: 12,
        justifyContent: 'space-between',
        marginBottom:12,
        borderColor:'#EAECF0',

    },
    modalMiddleBankActive: {
        width:'100%',
        flexDirection:'row',
        padding: 16,
        borderWidth:  1.5,
        borderRadius: 12,
        justifyContent: 'space-between',
        marginBottom:12,
        borderColor:'#0FA76F',

    },
    bankFirstContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankLogoContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:46,
        height:32,
        borderRadius:6,
        borderWidth:.3,
        borderColor:'#ECECEC',
        marginRight:12,
        overflow:'hidden'

        

    },
    bankLogo: {
        width:46,
        height:32,



    },
    bankNameContainer: {},
    bankName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#344054',
    },
    bankAccount: {
        fontSize: 14,
        fontWeight: '400',
        color: '#A0A0A0',
    },
    circleContainer: {
        width: 16,
        height: 16,
        borderRadius: 16/2 ,
        borderWidth: 1,
        borderColor:'#D0D5DD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleContainerActive: {
        width: 16,
        height: 16,
        borderRadius: 16/2 ,
        backgroundColor:'#0FA76F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircleActive: {
        width: 6,
        height: 6,
        borderRadius: 6/2 ,
        backgroundColor:'#fff',
    },
    sentRequest: {
        width: '100%',
        height: 42,
        marginTop: 6,
        borderRadius: 6,
        backgroundColor: '#0FA76F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sentRequestText: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 19.95,
        color: '#ffff'
    },
})