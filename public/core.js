var opensponsor = angular.module('opensponsorship', []);

function mainController($scope, $http){
    $scope.formData = {};
    
    $http.get('/')
        .success(function(data){})
        .error(function(data){
            console.log('ERROR:: PAGE FAILED TO LOAD '+data);
        });
    
    $scope.createAthlete = function(){
        $http.post('/createAthlete', $scope.formData)
            .success(function(data){
                $scrope.formData = {}; //clear form
                $scope.atheletes = data;
                console.log('DEBUG::CREATED '+data);
            })
            .error(function(data){
                console.log('ERROR:: FAILED CREATING '+data);
            })
    };
    
    
}