'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

import Pickup from './Pickup';
import OrderHistory from './OrderHistory';
import Account from './Account';

export default class Dashboard extends Component {

  componentWillMount(){ //set up new component when page is going to load with the following properties set.
    const userData = this.props.firebase.auth().currentUser;
    this.setState({
      loading: false,
      uid: userData.uid,
      pickup: '',
      pickupDate: '',
      pickupTime: '',
      dropoff: '',
      dropoffDate: '',
      dropoffTime: '',
      specialInstructions: ''
    })
    console.log(this.props)
}



  goToPickup(){
    this.props.navigator.push({
      component: Pickup
    })
  }

  goToOrderHistory(){
    this.props.navigator.push({
      component: OrderHistory
    })
  }

  goToAccount(){
    this.props.navigator.push({
      component: Account
    })
  }


  render() {
          return (
            <View style={styles.view}>
                <Image source={require('../images/logo_name.png')} style={styles.backgroundLogo} />

              <View style={styles.container}>
                <TouchableHighlight onPress={this.goToOrderHistory.bind(this)} style={styles.backgroundTimer}>
                  <Image source={require('../images/timer.png')} style={styles.backgroundTimer} />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goToOrderHistory.bind(this)} style={styles.transparentButton}>
                  <Text style={styles.transparentButtonText}>Order History</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.goToPickup.bind(this)} style={styles.backgroundCalendar}>
                  <Image source={require('../images/calendar.png')} style={styles.backgroundCalendar} />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goToPickup.bind(this)} style={styles.transparentButton}>
                  <Text style={styles.transparentButtonText}>Schedule Pickup</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.goToAccount.bind(this)} style={styles.backgroundIcon}>
                  <Image source={require('../images/account_icon.png')} style={styles.backgroundIcon} />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.goToAccount.bind(this)} style={styles.transparentButton}>
                  <Text style={styles.transparentButtonText}>Account</Text>
                </TouchableHighlight>

                {/* <Image source={require('../images/account_icon.png')} style={styles.backgroundIcon} />
                <Text style={styles.dashText}>Account</Text>
                    <View style={styles.column}>
                    </View> */}
              </View>
            </View>
          );
        }
      }

  const styles = StyleSheet.create({
    backgroundLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 350,
      marginLeft: 30,
    },
    backgroundTimer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 115,
      marginTop: 5,
    },
    backgroundCalendar: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 130,
    },
    backgroundIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      maxWidth: 180,
    },
      container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      view: {
        backgroundColor: '#1AAEED',
        flex: 1,
        paddingBottom: 80
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#afeeee',
        textAlign: 'center',
        padding: 15
      },
      column: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      transparentButtonText: {
        color: '#1AAEED',
        fontSize: 16,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
      }
  });
