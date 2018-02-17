(function () {
    function OrderService() {
        var orders = [];
        return {
            addOrder: addOrder,
            getOrder: getOrder
        }

        function addOrder(name, taco) {
            var orderObj = {};
            orderObj.name = name;
            orderObj.taco = taco;
            orders.push(orderObj);
            document.getElementById('nameInput').value = "";
            document.getElementById('tacoInput').selectedIndex = 0;
            orderObj = {};
            
            
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