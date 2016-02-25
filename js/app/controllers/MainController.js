function MainController($scope) {
  $scope.name = 'Kana'
  $scope.email = 'kana@artsymail.com'
  $scope.phone = '555-5555'
}

angular
  .module('app')
  .controller('MainController', MainController);
