(function () {
    var orderList = {
        template: `
            <div class="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Taco</th>
                    </tr>
                    <tr ng-repeat="x in $ctrl.orderList track by $index" >
                        <td>{{ x.name }}</td>
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