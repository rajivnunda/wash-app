'use strict' //declares that we use strict JavaScript rules. Because ReactNative is a new language we want to use strict JS to leave less room for compiler interpretation
import React, { Component } from 'react';

import {
  DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import Pickup from './Pickup';
import Confirmation from './Confirmation';

import styles from '../styles/common-styles';

export default class DateDropoff extends Component {
  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };

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
    })
    console.log(this.props)
  }

  handleSubmit(e){
    this.setState({
      loading: true
    })
    this.props.navigator.push({
      component: Confirmation,
      passProps: {
        pickup: this.props.children.pickup,
        pickupDate: this.props.children.pickupDate,
        pickupTime: this.props.children.pickupTime,
        dropoff: e,
        dropoffDate: e.toLocaleDateString(),
        dropoffTime: e.toLocaleTimeString()
      }
    })
    console.log(this.props);
  }
  handleBack(){
  this.props.navigator.pop();
  }

  render() {
    // Ideally, the timezone input would be a picker rather than a
    // text input, but we don't have any pickers yet :(
    return (
      <View style={stylesPicker.view}>
          <Image
          source={require('../images/wf.png')}
          style={stylesPicker.backgroundLogo} />

      <View style={stylesPicker.pickerContainer}>

        <Heading label="Select your drop off date" />
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />

        <WithLabel label="Drop off Time:">
          <Text>{
            this.state.date.toLocaleDateString() +
            ' ' +
            this.state.date.toLocaleTimeString()
          }</Text>
        </WithLabel>
        <TouchableHighlight onPress={ ()=> this.handleSubmit(this.state.date) } style={stylesPicker.primaryButton}>
          <Text style={stylesPicker.primaryButtonText}>Submit Drop Off Time</Text>
        </TouchableHighlight>
          <TouchableHighlight onPress={this.handleBack.bind(this)} style={stylesPicker.transparentButton}>
          <Text style={stylesPicker.transparentButtonText}>Back</Text>
        </TouchableHighlight>
      </View>
    </View>
    );
  }
}

class WithLabel extends Component {
  render() {
    return (
      <View style={stylesPicker.labelContainer}>
        <View style={stylesPicker.labelView}>
          <Text style={stylesPicker.label}>
            {this.props.label}
          </Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

class Heading extends Component {
  render() {
    return (
      <View style={stylesPicker.headingContainer}>
        <Text style={stylesPicker.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

exports.displayName = (undefined: ?string);
exports.title = '<DatePickerIOS>';
exports.description = 'Select dates and times using the native UIDatePicker.';
exports.examples = [
{
  title: '<DatePickerIOS>',
  render: function(): React.Element<any> {
    return <DateDropoff />;
  },
}];

var stylesPicker = StyleSheet.create({
  backgroundLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 377,
    height: 150,
    marginTop: 30
  },
  view: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 80
  },
  pickerContainer: {
    marginTop: 50,
    justifyContent: 'center'
  },
  textinput: {
    height: 26,
    width: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    fontSize: 13,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  labelView: {
    marginRight: 10,
    paddingVertical: 2,
  },
  label: {
    fontWeight: '500',
  },
  headingContainer: {
    padding: 4,
    backgroundColor: '#f6f7f8',
  },
  heading: {
    fontWeight: '500',
    fontSize: 14,
  },
  primaryButtonText: {
    backgroundColor: '#1AAEED',
    margin: 10,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  transparentButtonText: {
    color: '#1AAEED',
    margin: 10,
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
