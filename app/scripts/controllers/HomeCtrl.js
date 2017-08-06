(function() {
    function HomeCtrl($uibModal, Room, Message, $cookies) {          
        var messages = [];
        var ctrl = this;
        ctrl.heroTitle = "Bloc Chat";
        ctrl.user = $cookies.get('blocChatCurrentUser');
        ctrl.rooms = Room.all;
		
		ctrl.currentRoom = {};
	   
        
        ctrl.open = function() {
            $uibModal.open({
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
        
       ctrl.setRoom = function(room){
        ctrl.currentRoom = room;
        ctrl.messages = Message.getByRoomId(room.$id);
       };
        
        ctrl.sendMessage = function(message) {
			message.username = ctrl.user;
			message.roomId = ctrl.currentRoom.$id;
			Message.send(message);
		};


        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
})();