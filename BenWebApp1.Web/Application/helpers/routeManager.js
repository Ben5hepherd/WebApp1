define(["knockout", "scripts/lodash"],
    function (ko, _) {

        var routes = [];

        function createRoute(route, title, moduleId, id) {
            return {
                route: route,
                title: title,
                moduleId: "viewModels/" + moduleId,
                id: id
            };
        }

        function createParent(parent) {
            routes.push(parent);
            return parent;
        }

        function createChild(parent, child, permittedRoles) {
            if (parent.childRoutes === undefined)
                parent.childRoutes = [];

            child.parentId = parent.id;
            parent.childRoutes.push(child);
        }

        var home = createParent(createRoute("", "Ben Web App 1", "homepage", "BenWebApp1")); 
        //createChild(home, createRoute("User", "User", "user", "User"));

        var flattenedRoutes = ko.pureComputed(function () {
            var properRoutes = _.reject(routes, function (route) { return route.isLink });
            var flatRoutes = _.flattenDeep(_.map(properRoutes, function (routeItem) {
                var routeList = [];
                routeList.push(routeItem);
                if (routeItem.childRoutes)
                    routeList.push(routeItem.childRoutes);
                return routeList;
            }));
            return flatRoutes;
        });

        function routeIsActive(activeInstruction, routeItem) {
            return routeItem.id === activeInstruction.config.id
                || routeItem.route === activeInstruction.config.route
                || (activeInstruction.config.parentId !== undefined
                    && routeItem.id === activeInstruction.config.parentId);
        }

        return {
            routes: routes,
            flattenedRoutes: flattenedRoutes,
            routeIsActive: routeIsActive
        };
    });