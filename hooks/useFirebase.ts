import firebase from '@react-native-firebase/app'
import {PermissionsAndroid, Platform} from 'react-native'
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBMZ9hnixsvnIaojPxlnL7U0iEqqvKlM6A",
    projectId: "rnnotifications-a01ff",
    storageBucket: "rnnotifications-a01ff.appspot.com",
    appId: "1:90362773436:android:f7e255d34ba05ce7a275b9",
    databaseURL: "something.com",
    messagingSenderId: "123456789",
}

export const useFirebase = () => {

    const requestUserPermissionIOS = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      
        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
    }
      
    const requestUserPermissionAndroid = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    };

    const subscribeToTopic = () => {
        try {
          messaging().subscribeToTopic('weather')
        } catch (err) {
          console.log('subscribeToTopicFailed', err)
        }
      }

    const getPerrmissions = () => {
        if(Platform.OS === 'android') {
        requestUserPermissionAndroid()
        } else {
        requestUserPermissionIOS()
        }
    }

    const initializeApp = async () => {
        try {
          await firebase.initializeApp(firebaseConfig);
        } catch (err) {
          console.log('initializeAppError', err)
        }
    }

    const createNotificationListeners = async () => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
            "Notification caused app to open from background state:",
            remoteMessage.notification
            );
        });
        
        messaging().setBackgroundMessageHandler((remoteMessage): any => {
            console.log(
            'Notification got in the background mode:',
            remoteMessage.notification )
        })
        
        messaging().onMessage(remoteMessage => {
            if (remoteMessage) {
            console.log(
                "Notification data message:",
                remoteMessage.notification
            );
            }
        })
        
        messaging().getInitialNotification().then(remoteMessage => {
            if (remoteMessage) {
            console.log(
                "Notification caused app to open from quit state:",
                remoteMessage.notification
            );
            }
        });
    };

    return {
        initializeApp,
        getPerrmissions,
        subscribeToTopic,
        createNotificationListeners
    }
}