(function() {
  "use strict";
  angular.module("app").controller("logInCtrl", logInCtrl);
  //   inject $firebaseAuth
  logInCtrl.$inject = ["$firebaseAuth"];

  function logInCtrl($firebaseAuth) {
    let $ctrl = this;
    let firebaseAuthObj = $firebaseAuth();
    //login function
    $ctrl.logIn = function() {
      firebaseAuthObj.$signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };
  }
})();
