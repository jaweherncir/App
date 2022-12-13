import React, {useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import axios from 'axios';

const App = ({}) => {

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'refId': 'ali' })
    };
    fetch('http://localhost:8080/api/references', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));





  });
  return (
    <ImageBackground
      style={s.background}
      source={require('./src/assets/images/background.png')}
    />
  );
};

const s = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  header: {
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'RobotoSlab-Bold',
    color: '#323B45',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'RobotoSlab-Light',
    color: '#323B45',
  },
  spacer: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  gap: {
    width: 25,
  },
});

export default App;
