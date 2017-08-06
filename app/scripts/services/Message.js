(function() {
  function Message($firebaseArray, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.send = function(newMessage){
        
        messages.$add({ content: newMessage.content,
						roomId: newMessage.roomId,
					   	sentAt: date.now(),
						username: newMessage.username
		});
        
    };
      
      
      return Message;
    }
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$filter', Message]);
})();