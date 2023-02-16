# websocket-notifications-curiosum-blog-post


React-native Push Notification and Web Socket Example
This is a test application built with React-native that demonstrates the usage of Push Notification and Web Socket. This app has been developed with the purpose of showing how to integrate and use Push Notification and Web Socket in a React-native application.

Table of Contents
Installation
Usage
Push Notification
Web Socket
License
Installation
To get started with the installation of the application, follow these steps:

Clone the repository to your local machine.
Run npm install (or yarn) in the project directory to install the required dependencies.
Usage
Once you have installed the application, you can use it by running the following command in the project directory:

sh
Copy code
npm start
This will start the application and you should see the app running in your simulator or on your device.

Push Notification
To test the Push Notification functionality in this app, you can use a service like Firebase Cloud Messaging. Simply create an account and follow the instructions to send a test push notification to your app. You can use you own server also.

The app is already set up to receive push notifications, so you should see the notification pop up when you receive it.

Web Socket
This application also demonstrates the usage of Web Socket to receive real-time data. The app is set up to listen for updates on a WebSocket server.

To test this functionality, you can start a WebSocket server on your local machine or use a service like websocket.org to send test data.

Once you have a WebSocket server set up, you can update the websocketURL variable in the App.js file to point to your server's address.

License
This project is licensed under the MIT License. You can read the license details in the LICENSE file.
