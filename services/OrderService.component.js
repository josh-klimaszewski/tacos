(function () {
    function OrderService() {
        var orders = [];
        return {
            addOrder: addOrder,
            getOrder: getOrder,
            removeOrder: removeOrder
        }

        function addOrder(name, drink, taco) {
            var orderObj = {};
            orderObj.name = name;
            orderObj.drink = drink;
            orderObj.taco = taco;
            orders.push(orderObj);
            document.getElementById('nameInput').value = "";
            var ele = document.getElementsByName('drinkInput');
            for (var i = 0; i < ele.length; i++) {
                ele[i].checked = false;
            }
            document.getElementById('tacoInput').selectedIndex = 0;
            orderObj = {};
            console.log(orders);          
        }
        function getOrder() {
            return orders;
            orders = [];
        }
        function removeOrder(order) {
            var array = orders;
            var index = array.indexOf(order);
            array.splice(index, 1);
        }
    }
    angular
        .module("app")
        .factory("OrderService", OrderService);
})();