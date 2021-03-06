'use strict';
import React, {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    marginTop: 50,
    padding: 10
  },
  body: {
    flex: 9,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  toolbar: {
    height: 56,
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: '#1AAEED',
    borderWidth: 1,
    margin: 2
  },
    textInputBox: {
     height: 100,
     width: 300,
     borderColor: 'gray',
     borderWidth: 1,
  },
  transparentButton: {
    marginTop: 10,
    padding: 15
  },
  transparentButtonText: {
    color: '#1AAEED',
    textAlign: 'center',
    fontSize: 16
  },
  primaryButton: {
    margin: 10,
    padding: 15,
    backgroundColor: '#1AAEED'
  },
  primaryButtonText: {
    textAlign: 'center',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  },
  label: {
    fontWeight: '500',
  },
  heading: {
    fontWeight: '500',
    fontSize: 14,
  }
});
