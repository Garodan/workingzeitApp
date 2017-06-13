app.controller('zeitreviewCtrl', function($scope, $http) {
$http.get('database/workers.json')
.then(function(res){
  $scope.workerlist=res.data;
});
$scope.realDate = new Date();
});
