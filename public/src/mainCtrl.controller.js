(function() {
  "use strict";
  angular.module("app").controller("mainCtrl", mainCtrl);
  //   inject $firebaseAuth
  mainCtrl.$inject = ["$firebaseAuth"];
  function mainCtrl($firebaseAuth) {
    let $ctrl = this;
    let firebaseAuthObj = $firebaseAuth();
    // watcher on main ctr it will load once website starts and will show the state for login
    firebaseAuthObj.$onAuthStateChanged(function(user) {
      if (user === null) {
        $ctrl.user = user;
      } else {
        $ctrl.user = user.displayName;
      }

      console.log("authStateChanged", user);
      console.log($ctrl.user);
      if (user) {
        console.log("Welcome UID:" + user.uid);
      }
    });
    // signout function
    $ctrl.logOut = function() {
      firebaseAuthObj.$signOut();
    };
  }
})();
