app.controller('userController',['$scope','$resource',
	function ($scope, $resource) {
		var User = $resource('/api/users');
		User.query(function (results) {

		});
		$scope.users = [
			{ name : "Aniruddha Joshi"},
			{ name : "Anuradha Boche"}
		]
		$scope.createUser = function() {
			var user = new User();
			user.name = $scope.username;
			user.$save(function (result) {
				$scope.users.push(result);
			}); 
		}
}]);