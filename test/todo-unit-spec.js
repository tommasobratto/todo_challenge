describe('ToDoAppController', function() {

  beforeEach(module('ToDoApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDoAppController', {
      $scope : scope
    });
  }));

  it('initialises with an empty list and a form', function() {
    expect(scope.todoList).toBeUndefined();
    expect(scope.todoTask).toBeUndefined();
  });


});