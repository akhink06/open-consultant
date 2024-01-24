import { StyleSheet, Text,SafeAreaView, View , Modal, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const {width,height} = Dimensions.get('screen');

export default function WalletSuccess({data,updatePopup}) {
    const statusData =[
        {
            id:1,
            status: 'Request Sent',
            is_done : true
        
        },
        {
            id:2,
            status: 'Admin Review request',
            is_done : false
        
        },
        {
            id:3,
            status: 'Admin approves request',
            is_done : false
        
        },
        {
            id:4,
            status: 'Requested amount is transferred',
            is_done : false
        
        },
    ]

    const handleclose = ()=>{
        updatePopup({type: 'CLOSE'})
        
    }

  return (
    <SafeAreaView>
        <Modal 
            transparent= {true}
            visible={ data }>
                <View style={styles.modal}>
                    <View style={styles.innerModal}>
                        <View style={styles.successTop}>
                            <View style={styles.successTopImgCont}>
                                <Image style={styles.successTopImg} source={require('../../assets/icons/Vector.png')}/>
                            </View>
                            
                            <Text style={styles.successText1}>
                                ₹2000 Transfer Request has been sent to Admin
                            </Text>
                            <Text style={styles.successText2}>
                                Admin will accept your request within 2-3 Days
                            </Text>
                        </View>
                        <View style={styles.successBottom}>
                            <View style={styles.line}></View>
                                <FlatList 
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={styles.mainNotificationcontainer}
                                data={statusData}
                                renderItem={({item})=>(
                                    <View style={styles.notificationStatusContainer}>
                                        <View style={item.is_done? styles.statusCircleGreen : styles.statusCircle}></View>
                                        <Text style={item.is_done? styles.statusTextGreen : styles.statusText}>{item.status}</Text>
                                    </View>
                                )}
                                />
                            
                        </View>
                        <TouchableOpacity activeOpacity={.8} onPress={handleclose}  style={styles.closeButton}>
                                    <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                    </View>

                </View>
                
        </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width,
       

    },
    innerModal: {
        backgroundColor: '#fff',
        width: width - 67,
        borderRadius:12,
        padding: 24.5,
    },
    successTop: {
        

    },
    successTopImgCont: {
        alignSelf: 'center',
    },
    successTopImg: {
       width: 47,
       height: 47,
       aspectRatio:1/1,
       marginBottom: 20,
    },
    successText1: {
        fontSize: 20,
        fontWeight: '500',
        color: '#2D2D2D',
        lineHeight: 28.5,
        // fontFamily: 'Gordita',
        marginBottom: 20,

    },
    successText2: {
        // fontFamily: 'Gordita',
        fontSize: 14,
        fontWeight: '500',
        color: '#2D2D2D',
        lineHeight: 19.95,
    },
    successBottom: {
        paddingHorizontal:8,
        marginTop: 20,
        height:150,
        position:'relative',
    
    },
    line:{
        position:'absolute',
        borderLeftWidth:.5,
        borderColor:'#ECECEC',
        height:130,
        left:13,
        top:15
    },
    mainNotificationcontainer:{
        justifyContent:'space-between',

    },
    notificationStatusContainer:{
        flexDirection: 'row',
        alignItems:'center',
        marginVertical:10.4,

    },
    statusCircle:{
        width:10,
        height:10,
        borderRadius:10/2,
        backgroundColor:'#E2E2E2',
        marginRight: 10,

    },
    statusText:{
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Gordita Regular',
        color:'#A0A0A0',
    },
    statusCircleGreen:{
        width:10,
        height:10,
        borderRadius:10/2,
        backgroundColor:'#0FA76F',
        marginRight: 10,

    },
    statusTextGreen:{
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Gordita Regular',
        color:'#0FA76F',
    },
    closeButton: {
        // width: '100%',
        height: 42,
        borderRadius: 6,
        padding: 10,
        gap: 10,
        backgroundColor: '#0FA76F',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        
    },
    closeButtonText: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 19.95,
        color: '#ffff'
    },
})