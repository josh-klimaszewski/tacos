(function () {
    var orderForm = {
        template: `
            <form class="container" ng-submit="$ctrl.sendOrder(order)">
                <h2>Taco Time?</h2>
                <p>You know it!</p>
                <div class="formTask">
                    <p>Name: </p>
                    <input type="text" ng-model="order.name" placeholder="Enter your name.">
                </div>
                <div class="formTask">
                    <p>Taco: </p>
                    <select name="tacos" ng-model="order.taco">
                        <option value="carne">Carne</option>
                        <option value="pollo">Pollo</option>
                        <option value="pescado">Pescado</option>
                    </select>
                </div>
                <button id="placeOrder">Place Order</button>
            </form>
        `,
        controller: function(OrderService) {
            var vm = this;
            vm.sendOrder = function(order) {
                OrderService.addOrder(order);
            }
        }
    }
    angular
        .module("app")
        .component("orderForm", orderForm)
})();