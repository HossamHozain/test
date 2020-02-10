(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAkFQvWZMB27KTT4v-SMUjMi9KBT--QXJk",
    authDomain: "realtime-2020.firebaseapp.com",
    databaseURL: "https://realtime-2020.firebaseio.com",
    projectId: "realtime-2020",
    storageBucket: "realtime-2020.appspot.com",
    messagingSenderId: "51224157809",
    appId: "1:51224157809:web:226a17adc3da1be9f1c5d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //   start the module
  ("use strict");
  angular
    .module("app", ["ui.router", "firebase"])
    .constant(
      "FBMSG",
      "https://console.firebase.google.com/project/realtime-2020/database/realtime-2020/data/event"
    );
})();
