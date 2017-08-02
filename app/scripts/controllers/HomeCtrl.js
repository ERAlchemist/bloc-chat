(function() {
    function HomeCtrl($uibModal, Room, Message) {          
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
        
        ctrl.rooms = Room.all;
		
		ctrl.currentRoom = {};
	
        
        ctrl.open = function() {
            var modalInstance = $uibModal.open({
                animation: ctrl.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance',
				resolve: {
                    rooms: function() {
                        return ctrl.rooms;
                    }
                }
            });
        };


        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();