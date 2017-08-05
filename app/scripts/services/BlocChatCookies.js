(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var service = this;
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/usernameModal.html',
				controller: 'UserModalInstanceCtrl as userModalInstance'
			});
		} else {
		  service.currentUser = currentUser;
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();