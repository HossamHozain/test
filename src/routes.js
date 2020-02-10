(function() {
  "use strict";
  angular.module("app").config(routeConfig);
  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/public");
    $stateProvider
      .state("public", {
        url: "/public",
        templateUrl: "src/views/public/public.template.html",
        controller: "publicCtrl as $ctrl"
      })
      .state("products", {
        url: "/products",
        templateUrl: "src/views/products/products.template.html",
        controller: "productsCtrl as $ctrl"
      })
      .state("shoppingCart", {
        url: "/shoppingCart",
        templateUrl: "src/views/shoppingCart/shoppingCart.template.html",
        controller: "shoppingCartCtrl as $ctrl"
      })
      .state("checkOut", {
        url: "/checkOut",
        templateUrl: "src/views/checkOut/checkOut.template.html",
        controller: "checkOutCtrl as $ctrl"
      })
      .state("orderSuccess", {
        url: "/orderSuccess",
        templateUrl: "src/views/orderSuccess/orderSuccess.template.html",
        controller: "orderSuccessCtrl as $ctrl"
      })
      .state("myOrders", {
        url: "/myOrders",
        templateUrl: "src/views/myOrders/myOrders.template.html",
        controller: "myOrdersCtrl as $ctrl"
      })
      .state("admin", {
        url: "/admin",
        templateUrl: "src/views/admin/admin.template.html",
        controller: "adminCtrl as $ctrl"
      })
      .state("admin.orders", {
        url:"/orders",
        templateUrl: "src/views/sup/orders/adminOrders.template.html",
        controller: "adminOrdersCtrl as $ctrl"
      })
      .state("admin.products", {
        url:"/products",
        templateUrl: "src/views/sup/products/adminProducts.template.html",
        controller: "adminProductsCtrl as $ctrl"
      })
      .state("logIn", {
        url:"/logIn",
        templateUrl: "src/views/logIn/logIn.template.html",
        controller: "logInCtrl as $ctrl"
      })
  }
})();
