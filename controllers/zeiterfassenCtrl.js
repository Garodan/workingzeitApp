app.controller('zeiterfassenCtrl', function($scope, $http) {
$http.get('database/workers.json')
.then(function(res){
  $scope.workerlist=res.data;
});

//$scope.addWorkTime = function(){
//  $scope.workerslist.push({
//  name: $scope..name
//  )};


//};
  
//$scope.parent = {checkOut:''};
//$scope.test = $scope.parent.checkOut;
$scope.realDate = new Date();
$scope.realTime = new Date().toLocaleTimeString();
//zum rantasten wie die Zeitfunktionen funktionieren....
//$scope.minDay =  $scope.realDate.getDate();
//$scope.minMonth =  $scope.realDate.getMonth()+1;
//$scope.minYear =  $scope.realDate.getFullYear()-1;
$scope.minDate = ($scope.realDate.getFullYear()-1)+'-'+($scope.realDate.getMonth()+1)+'-'+$scope.realDate.getDate();


//$scope.starttime = $.each($scope.workerlist, function(i,obj){if($scope.pickedWorker == obj.name){return "12:12"}}) 
// function () {
   //if(wokerlist[$scope.workerlist].)

    //}; 
});
