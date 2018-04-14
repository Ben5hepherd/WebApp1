define(
    ["knockout", "scripts/toastr", "komapping", "factories/userFactory", "server", "plugins/router"],
    function (ko, toastr, mapping, userFactory, _, server, router, systemRoles) {
        var model = {}
        model.user = {};

        function getUser() {
            //return server.getData("api/User").done(function (data) {
            //    model.user = userFactory.create(data);
            //});

            return;
        }

        function activate() {
            return getUser();
        }

        return {
            model: ko.observable(model),
            activate: activate
        }
    });