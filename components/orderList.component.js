(function () {
    var orderList = {
        template: `
            <div class="table">
                <table>
                    <tr>
                        <th id="thLeft">Name</th>
                        <th>Drink</th>
                        <th id="thRight">Taco</th>
                    </tr>
                    <tr ng-repeat="x in $ctrl.orderList track by $index" >
                        <td>{{ x.name }}</td>
                        <td class="pillar">{{ x.drink }}</td>
                        <td>{{ x.taco }}</td>
                    </tr>
                </table>
            </div>
        `,
        controller: function(OrderService) {
            var vm = this;
            vm.orderList = OrderService.getOrder();
            console.log(vm.orderList)
        }
    }
    angular
        .module("app")
        .component("orderList", orderList)
})();