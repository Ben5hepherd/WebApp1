define(["viewModels/user", "scripts/lodash", "require", "helpers/routeManager"],
    function (userViewModel, _, require, routemanager) {
        var router = require('plugins/router');
        var ko = require('knockout');

        var initialised = ko.observable(false);

        function isActive(routerItem) {
            var activeItem = router.activeInstruction();
            return routemanager.routeIsActive(activeItem, routerItem);
        };

        function getVisibleChildren(routeItem) {
            if (!routeItem.childRoutes)
                return [];

            return _.filter(routeItem.childRoutes, function (childItem) {
                return childItem.showInMenu;
            });
        }

        return {
            router: router,

            activate: function () {
                router.map(routemanager.flattenedRoutes());
                //return $.when(router.activate(), userViewModel.activate());
                return $.when(router.activate());
            },

            compositionComplete: function () {
                initialised(true);
            },

            routemanager: routemanager,

            //userModel: userViewModel.model,

            initialised: initialised,
            isActive: isActive,
            getVisibleChildren: getVisibleChildren
        };
    });