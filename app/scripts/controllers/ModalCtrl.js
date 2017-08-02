(function() {
     function ModalCtrl($uibModalInstance, Room) {
         this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
        this.submit = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
    }

         

 angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();