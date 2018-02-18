(function () {
    var orderList = {
        template: `
            <div class="table">
                <table>
                    <tr>
                        <th class="thRight">Name</th>
                        <th class="thRight">Drink</th>
                        <th class="thRight">Taco</th>
                        <th>Done</th>
                    </tr>
                    <tr ng-repeat="x in $ctrl.orderList track by $index" >
                        <td>{{ x.name }}</td>
                        <td class="pillar">{{ x.drink }}</td>
                        <td class="pillar">{{ x.taco }}</td>
                        <td><button class="xout" ng-click="$ctrl.xoutOrder(x)";>x</button>
                    </tr>
                </table>
            </div>
        `,
        controller: function(OrderService) {
            var vm = this;
            vm.orderList = OrderService.getOrder();
            vm.xoutOrder = function(order)  {
                OrderService.removeOrder(order);
            }

        }
    }
    angular
        .module("app")
        .component("orderList", orderList)
})();