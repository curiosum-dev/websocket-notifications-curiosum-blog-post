/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SocketProvider } from './context/socketContext';
import { useFirebase } from './hooks/useFirebase';

const HOST = 'https://9b23-2a01-111f-4504-6600-8a71-a07f-bb82-38a0.ngrok.io'

const App = (): JSX.Element => {
  const { 
    initializeApp, 
    getPerrmissions, 
    subscribeToTopic, 
    createNotificationListeners 
  } = useFirebase()

  useEffect(() => {
    initializeApp()
    getPerrmissions()
    subscribeToTopic()
    createNotificationListeners()
  }, [])

  return (
    <SocketProvider url={HOST + '/socket'} options={{}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>React-native Notifications test</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>RNFIREBASE BUTTON 1</Text>
        </TouchableOpacity>
        <WSDisplay />
      </SafeAreaView>
    </SocketProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',  
  },
  button: {
    padding: 24,
    margin: 12,
    borderRadius: 16,
    backgroundColor: '#7CF0F6',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',  
  }
});

export default App;
