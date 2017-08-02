(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        var ctrl = this;
		
		ctrl.animationsEnabled = true;
       
        ctrl.ok = function () {
            
            Room.add(ctrl.chatName);
            $uibModalInstance.close();
        };

        ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();