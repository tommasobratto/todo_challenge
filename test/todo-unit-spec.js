describe('TodoAppController', function() {

  beforeEach(module('TodoApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('TodoAppController', {
      $scope: scope
    });
  }));

  it('initialises with an empty list and a form', function() {
    expect(scope.todoList).toEqual([]);
    expect(scope.todoTask).toBeUndefined;
  });

  it('should add a task', function() {
    scope.todoTask = 'testing... 1, 2, 3';
    scope.key = 13;
    scope.addTask();
    expect(scope.todoList[0].text).toEqual('testing... 1, 2, 3');
    expect(scope.todoTask).toEqual('');
  });

  it('should tick off a completed taks', function() {
    scope.todoTask = 'testing...1, 2, 3';
    scope.keyPress();
    scope.addTask();
    scope.toggleTick();
    expect(scope.todoTask.done).toEqual(true)
  }); 

});