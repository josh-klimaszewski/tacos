(function () {
    function OrderService() {
        var orders = [];
        return {
            addOrder: addOrder,
            getOrder: getOrder
        }

        function addOrder(orderObj) {
            orders.push(orderObj);
            
            
            console.log(orders);
            
        }
        function getOrder() {
            return orders;
            orders = [];
        }
    }
    angular
        .module("app")
        .factory("OrderService", OrderService);
})();