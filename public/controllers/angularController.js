TodoApp.controller('TodoAppController', function($scope) {
  $scope.todoList = [
  {text: 'testing... 1, 2, 3', done: false}
  ];
  $scope.todoTask;

  $scope.addTask = function() {
    if($scope.todoTask) {
      $scope.todoList.push({text: $scope.todoTask, done: false});
      $scope.todoTask = '';
      console.log($scope.todoList)
    }
  };

  $scope.toggleDone = function() {
    $scope.todoList[0].done = true;
    $('#done').css({
        'color': 'grey',
        'text-decoration': 'line-through'
      })
    console.log('toggled')
    }; 
});