var opensponsor = angular.module('opensponsorship', []);

function mainController($scope, $http){
    $scope.formData = {};
    $scope.countries = [];
    $scope.sports = [];
    
    //Any data we need for user to choose from (in this case, countries and sports)
    $http.get('/')
        .success(function(data){
            
        })
        .error(function(data){
            console.log('ERROR:: PAGE FAILED TO LOAD '+data);
        });
    $http.get('/sports')
        .success(function(data){
            $scope.sports = data;
        })
        .error(function(data){
            console.log('ERROR:: sports FAILED TO LOAD '+data);
        });
    $http.get('/countries')
        .success(function(data){
            $scope.countries = data;
        })
        .error(function(data){
            console.log('ERROR:: countries FAILED TO LOAD '+data);
        });

    //Data from form will go here
    $scope.createAthlete = function(){
        
        console.log("DEBUG::CREATING ATHLETE");
        
        $http.post('/createAthlete', $scope.formData)
            .success(function(data){
                $scope.formData = {}; //clear form
                $scope.atheletes = data;
                console.log('DEBUG::CREATED '+data);
            })
            .error(function(data){
                console.log('ERROR:: FAILED CREATING '+data);
            })
    };
}