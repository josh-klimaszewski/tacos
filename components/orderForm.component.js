(function () {
    var orderForm = {
        template: `
            <form class="container" ng-submit="$ctrl.sendOrder(name, taco)">
                <h2>Taco Time?</h2>
                <p>You know it!</p>
                <div class="formTask">
                    <p>Name: </p>
                    <input id="nameInput" type="text" ng-model="name" placeholder="Enter your name.">
                </div>
                <div class="formTask">
                    <p>Taco: </p>
                    <select id="tacoInput" ng-model="taco">
                        <option></option>
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
            vm.sendOrder = function(name, taco) {
                OrderService.addOrder(name, taco);
            }
        }
    }
    angular
        .module("app")
        .component("orderForm", orderForm)
})();