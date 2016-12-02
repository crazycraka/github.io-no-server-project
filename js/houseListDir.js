/**
 * Created by scott on 12/1/16.
 */

angular.module('housingApp').directive('houseListDir', function($scope){

    return {
        templateUrl: '',
        link: function (scope, element, attributes) {
            scope.test = "angular is working, and first directive is connected";
            console.log('houselistdir is connected');
        }
    }
});