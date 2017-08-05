(function() {
	function UserModalInstanceCtrl($cookies, $uibModalInstance) {
		var ctrl = this;

		ctrl.title = "Enter a username";
		ctrl.user = "test"
    
		ctrl.ok = function () {
			$cookies.put('blocChatCurrentUser', ctrl.username);
			ctrl.currentUser = ctrl.username;
			$uibModalInstance.close();
		};	
	};

     angular
         .module('blocChat')
         .controller('UserModalInstanceCtrl', ['$cookies', '$uibModalInstance', UserModalInstanceCtrl]);
})();