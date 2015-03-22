TodoApp.controller('TodoAppController', function($scope) {
  $scope.todoList = [];
  $scope.todoTask = '';

  $scope.addTask = function() {
    if($scope.todoTask) {
      $scope.todoList.push({text: $scope.todoTask});
      $scope.todoTask = '';
    }
  };
});