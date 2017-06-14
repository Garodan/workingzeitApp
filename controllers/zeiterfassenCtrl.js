app.controller('zeiterfassenCtrl', function ($scope, $http) {
    $http.get('database/workers.json')
        .then(function (res) {
            $scope.jsondata = res.data;
            $scope.workerlist = getWorkers(res.data.workers);

        });

    $scope.realDate = new Date();
    $scope.realTime = new Date().toLocaleTimeString();
    $scope.minDate = ($scope.realDate.getFullYear() - 1) + '-' + ($scope.realDate.getMonth() + 1) + '-' + $scope.realDate.getDate();
    $scope.pickedDate = new Date();
    //$scope.addWorkTime = function(){
    //  $scope.workerslist.push({
    //  name: $scope..name
    //  )};

    $scope.pickedWorkerIndex = -1;
    $scope.getWorkerIndex = function () {
        $scope.pickedWorkerIndex = $scope.workerlist.indexOf($scope.pickedWorker);
    };

    $scope.dateSelected = function () {
        var tDate = ($scope.pickedDate.getFullYear()) + '-' + pad(($scope.pickedDate.getMonth() + 1), 2) + '-' + pad($scope.pickedDate.getDate(), 2);
        if ($scope.pickedWorkerIndex >= 0) {
            if ($scope.jsondata.workers[$scope.pickedWorkerIndex].workdays.some(function (el) {
                    return el.date == tDate;
                })) {
                var index = $scope.jsondata.workers[$scope.pickedWorkerIndex].workdays.findIndex(x => x.date == tDate);
                $scope.starttime = $scope.jsondata.workers[$scope.pickedWorkerIndex].workdays[index].starttime;
                $scope.endtime = $scope.jsondata.workers[$scope.pickedWorkerIndex].workdays[index].endtime;
            }
        }
    };

    $scope.addWorkday = function () {
        var tDate = ($scope.pickedDate.getFullYear()) + '-' + pad(($scope.pickedDate.getMonth() + 1), 2) + '-' + pad($scope.pickedDate.getDate(), 2);
        if ($scope.pickedWorkerIndex >= 0) {
            if (!$scope.jsondata.workers[$scope.pickedWorkerIndex].workdays.some(function (el) {
                    return el.date == tDate;
                })) {
                $scope.jsondata.workers[$scope.pickedWorkerIndex].workdays
                    .push({
                        "date": tDate,
                        "starttime": $scope.starttime.toLocaleTimeString(),
                        "endtime": $scope.endtime.toLocaleTimeString()
                    });
                $scope.worktime = $scope.endtime - $scope.starttime;  
                //TODO worktime < 06:00 = keine Pause d.h. worktime kann ins json file und breaktime = 00:00;
                //       worktime => 06:00 = Pause von 00:30 d.h. worktime - 00:30 und dann ins json und breaktime = 00:30;
                //      worktime => 09:00 = Pause von 00:45 d.h. worktime - 00:45 und dann ins json und breaktime = 00:45;

                $http.post("/", $scope.jsondata).
                then(function (data) {
                    console.log("posted successfully");
                                                                                               
                   
                })
            }
        }
    
    };



    //     $scope.realWorkTime = function() {


    //         // using static methods
    // var start =  $scope.starttime.toLocaleTimeString();
    // // the event you'd like to time goes here:
    // var end =  $scope.endtime.toLocaleTimeString();
    // var elapsed = end - start; // time in milliseconds

    // var difference = new Date(elapsed);
    // //If you really want the hours/minutes, 
    // //Date has functions for that too:
    // var diff_hours = difference.getHours();
    // var diff_mins = difference.getMinutes();
    //     };

    //     //zum rantasten wie die Zeitfunktionen funktionieren....
    //     //$scope.minDay =  $scope.realDate.getDate();
    //     //$scope.minMonth =  $scope.realDate.getMonth()+1;
    //     //$scope.minYear =  $scope.realDate.getFullYear()-1;

});
//für das Datumsformat
function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
};
//Werte aus dem Array (die Arbeiter)
function getWorkers(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        temp.push(arr[i].name);
    }
    return temp;
};