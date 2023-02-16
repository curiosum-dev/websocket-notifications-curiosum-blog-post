<h1>React-native Push Notification and Web Socket Example</h1>

<p>This is a test application built with React-native that demonstrates the usage of Push Notification and Web Socket. This app has been developed with the purpose of showing how to integrate and use Push Notification and Web Socket in a React-native application.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#push-notification">Push Notification</a></li>
  <li><a href="#web-socket">Web Socket</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="installation">Installation</h2>

<p>To get started with the installation of the application, follow these steps:</p>

<ol>
  <li>Clone the repository to your local machine.</li>
  <li>Run <code>npm install or yarn</code> in the project directory to install the required dependencies.</li>
</ol>

<h2 id="usage">Usage</h2>

<p>Once you have installed the application, you can use it by running the following command in the project directory:</p>

<pre><code>npm start</code></pre> 

<p>This will start the application and you should see the app running in your simulator or on your device.</p>

<h2 id="push-notification">Push Notification</h2>

<p>To test the Push Notification functionality in this app, you can use a service like <a href="https://console.firebase.google.com/">Firebase Cloud Messaging</a>. Simply create an account and follow the instructions to send a test push notification to your app.</p>

<p>The app is already set up to receive push notifications, so you should see the notification pop up when you receive it.</p>

<h2 id="web-socket">Web Socket</h2>

<p>This application also demonstrates the usage of Web Socket to receive real-time data. The app is set up to listen for updates on a WebSocket server.</p>

<p>To test this functionality, you can start a WebSocket server on your local machine or use a service like <a href="https://www.websocket.org/echo.html">websocket.org</a> to send test data.</p>

<p>Once you have a WebSocket server set up, you can update the <code>websocketURL</code> variable in the <code>App.js</code> file to point to your server's address.</p>

<h2 id="license">License</h2>

<p>This project is licensed under the MIT License. You can read the license details in the <code>LICENSE</code> file.</p>
