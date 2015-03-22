TodoApp.controller('TodoAppController', function($scope) {
  $scope.todoList = [];
  $scope.todoTask;
  $scope.key = {};

  $scope.addTask = function() {
    if($scope.todoTask && $scope.key === 13) {
      $scope.todoList.push({text: $scope.todoTask, done: false});
      $scope.todoTask = '';
    }
  };

  $scope.toggleTick = function() {

  };
});